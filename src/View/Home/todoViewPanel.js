import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { fetchData, deleteData } from '../../Store/Actions'

class ViewTodos extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds,
        }


        
    }

    componentDidMount(){
        console.log('net '+this.props.networkStatus)
        switch (this.props.networkStatus) {
            case true:
            this.props.fetchData();
            console.log(this.props.Todo)
                break;
            case false:

                alert('Something Wrong.Please Try again later')

                break;
            default:
                return;

        }
    }

    renderItem = (rowData) => {
        let swipeBtns = [{
            text: 'Done !',
            backgroundColor: 'green',
            onPress: () => {
                this.props.deleteData(rowData.id)
                if (!this.props.isFetching) {
                    this.props.fetchData()
                }
            }
        }];

        return (
            <Swipeout
                right={swipeBtns}
                backgroundColor='transparent'
                style={styles.listRow}
            >
                <TouchableHighlight
                    style={styles.listRow}
                >
                    <View>
                        <View >
                            <Text style={styles.rowText} > {rowData.inputTodo} </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeout>

        )
    }

    render() {
        return (
            
            <View style={styles.container}>
             {
                    !this.props.Todo.data.length && !this.props.isFetching   ? <Text style={styles.placeHolderText}>Plan Your Day.Enter something.</Text>:null
                }
                {
                    this.props.isFetching ? 
                    <ActivityIndicator
                        size="small"
                        color="#0077c1"
                    />
                        :
                        <ListView
                            style={styles.list}
                            dataSource={this.state.dataSource.cloneWithRows(this.props.Todo.data)}
                            renderRow={(rowData) => this.renderItem(rowData)}
                            enableEmptySections
                        />
                }
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    list: {
        borderWidth: 0.5,
        margin: 5,
        borderColor: 'lightgray',
        width:'100%'
    },
    listRow: {
        borderWidth: 0.4,
        borderColor: 'lightgray',
       
    },
    rowText: {
        fontSize: 20,
        padding: 10
    },
    placeHolderText:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:20,
        color:'lightgray'
    },container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    }

})


function mapStateToProps(state) {
    console.log(state)
    return {
        Todo: state.Todo,
        isFetching: state.Todo.isFetching,
        error: state.Todo.isError
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData, deleteData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTodos);