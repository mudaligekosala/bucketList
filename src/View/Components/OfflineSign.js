import React, { Component } from 'react';
import { StyleSheet, View,Text, Platform } from 'react-native';

const OfflineSign = () =>{
        return(
            <View style={styles.container}>
                 <Text style={styles.text}>No Internet Connection</Text>
            </View>
           
        )
}

const styles = StyleSheet.create({
    container:{
        ...Platform.select({
            ios:{marginTop:20}
        }),
        backgroundColor:'red',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        flexDirection: 'row',
        height:30
    },
    text:{
        fontSize:16,
        padding:5,
        color:'#fff'
    }
})

export default OfflineSign;