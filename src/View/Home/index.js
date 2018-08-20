import React, { Component } from 'react';
import { StyleSheet, View,NetInfo,Text } from 'react-native';
//import components
import ViewInput from './todoInputPanel';
import ViewTodos from './todoViewPanel';
//impo=rt component
import OfflineView from '../Components/OfflineSign'

class Home extends Component {

constructor(){
    super()
    this.state = {
        isConnected: true
    }
}

//get internet status
handleInternetConnectivity = (isConnected) => {
console.log('isConnected'+ isConnected)
    if(isConnected){
        this.setState({
            isConnected
        })}else{
            this.setState({
                isConnected
            })
        }
    
}


componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleInternetConnectivity);
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleInternetConnectivity);
 }

    render() {
        return (
            <View style={styles.container}>
            {
                !this.state.isConnected ? <OfflineView/> : null
            }

            <View style={styles.titleContainer}>
                <Text style={styles.title}>My Bucket List</Text>
            </View>
            
                <View style={styles.containerInput}>
                    <ViewInput
                    networkStatus={this.state.isConnected}
                    />
                </View>
                <View style={styles.containerView}>
                    <ViewTodos
                    networkStatus={this.state.isConnected}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerInput:{
        flex:1,
        marginTop: 30,
        marginLeft:20,
        marginRight: 20,
    },
    containerView:{
        flex:3
    },
    title:{
        fontSize:40,
        color:'#0077c1',
        fontFamily: 'IndieFlower',
       
    },
    titleContainer:{
        alignItems: 'center',
        marginTop:30
    }
})

export default Home;
