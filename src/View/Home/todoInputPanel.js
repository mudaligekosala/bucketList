import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
//import action
import { postData, fetchData } from '../../Store/Actions'

class ViewInput extends Component {

    constructor(props) {
        super(props)

        //inital state
        this.state = {
            inputTodo: ''
        }
    }
    //get text from text input
    handleInput = (text) => {
        this.setState({
            inputTodo: text
        })
    }

    submitTodo = () => {

        switch (this.props.networkStatus) {
            case true:
            this.props.postData(this.state)

            if (!this.props.isFetching) {
                this.props.fetchData()
            }
                break;
            case false:
            alert('We cant update your bucket list now.')
                break;
            default:
                return;

        }
        

    }



    render() {
        return (
            <View>
                <TextInput
                    placeholder='I need to do this'
                    style={styles.textInput}
                    onChangeText={this.handleInput}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.submitTodo}
                >
                    <Text
                        style={styles.buttonText}
                    >Do This Today</Text>
                </TouchableOpacity>

                <Text>{this.props.Todo}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#42a5f4',
        borderWidth: 1,
        fontSize: 25,
        padding: 10,
        width: '100%',
        borderRadius: 60,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0077c1',
        width: '100%',
        marginTop: 20,
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 28,
        padding: 5,
        color: '#fff'
    }
})

function mapStateToProps(state) {
    return {
        isFetching: state.isFetching
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        postData,
        fetchData
    }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(ViewInput);