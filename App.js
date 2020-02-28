import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useScreens} from 'react-native-screens';

import { createStackNavigator } from '@react-navigation/stack';
import { BaseButton, } from 'react-native-gesture-handler';
import DetailScreen from "./app/Detail";
useScreens();

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <BaseButton onPress={()=>{navigation.navigate('Detail1')}}><Text>Go to Detail1</Text></BaseButton>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Detail1" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

