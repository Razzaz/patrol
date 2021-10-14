import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Accident,
  HistoryAbsent,
  HistoryAccident,
  HistoryCheckpoint,
  Home,
  Login,
  Scan,
  Schedule,
  Settings,
} from '../pages';
import Absent from '../pages/Absent';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Accident"
        component={Accident}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryAbsent"
        component={HistoryAbsent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryAccident"
        component={HistoryAccident}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryCheckpoint"
        component={HistoryCheckpoint}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Absent"
        component={Absent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
