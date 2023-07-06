import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import Home from '../screens/home';
import AddDream from "../screens/addDream";
import { createAppContainer } from "react-navigation";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    AddDream: {
        screen: AddDream,
        navigationOptions: {
            headerShown: false,
        }
    }
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);