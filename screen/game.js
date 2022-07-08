import * as React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';


export default function GameScreen ({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}> WELCOME TO THE GAME</Text>
            <Button title="View Score"
            onPress={() => navigation.navigate('Score')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center'
    },

    text:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
})