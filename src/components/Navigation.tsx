import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import MathGame from '../screens/MathGame';
import Difficult from '../screens/Difficult';
import CalcScreen from '../screens/CalcScreen';
import {RootStackParamList} from '../interfaces/propsinterfaces';
import AlphabetMain from '../screens/AlphabetMain';
import AlphabetGame from '../screens/AlphabetGame';
import WhatIsNumber from '../screens/WhatIsNumber';

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MathGame"
          component={MathGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Difficult"
          component={Difficult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalcScreen"
          component={CalcScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AlphabetMain"
          component={AlphabetMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AlphabetGame"
          component={AlphabetGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WhatIsNumber"
          component={WhatIsNumber}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
