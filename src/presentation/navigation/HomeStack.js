import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Header from "../components/Header";
import { Platform, StatusBar } from "react-native";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator 
        screenOptions={{ 
            header: (props) => <Header/>,
            headerStatusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
        }}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
)

export { HomeStackScreen }