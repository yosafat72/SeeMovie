import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FavoriteScreen from "../screens/FavoriteScreen";
import Header from "../components/Header";
import { Platform, StatusBar } from "react-native";

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = () => (
    <FavoriteStack.Navigator 
        screenOptions={{ 
            header: (props) => <Header/>,
            headerStatusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
        }}>
        <FavoriteStack.Screen name="HomeScreen" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
)

export { FavoriteStackScreen }