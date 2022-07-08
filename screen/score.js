import * as React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';


export default function ScoreScreen ({navigation}) {
    return (
        <View style = {styles.container}>
            <Text> SCORES</Text>
            <Button title="Go Back to Home"
            onPress={() => navigation.navigate('Default')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',
    }
})