import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScoreScreen from './screen/score';
import GameScreen from './screen/game';

const Stack = createNativeStackNavigator();

function DefaultScreen ({ navigation }){
    return (
      <View style={styles.nav}>
        <Text>Default Screen</Text>
        <Button style ={styles.bt1} title="Start Game"
            onPress={() => navigation.navigate('Game')} />
      </View>
    );
}


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Default" component = {DefaultScreen}/>
      <Stack.Screen name = "Score" component = {ScoreScreen}/>
      <Stack.Screen name = "Game" component = {GameScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bt1:{
    position: 'absolute',
    marginTop: 10,
    backgroundColor: 'gray',
  },

  nav:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }

});
