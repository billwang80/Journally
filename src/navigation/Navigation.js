import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={MainScreen}/>
        </Stack.Navigator>
    );
}

export default Navigation;