import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from "./HomeStack";
import { Ionicons } from '@expo/vector-icons';
import { FavoriteStackScreen } from "./FavoriteStack";
import Header from "../components/Header";
import { Platform } from "react-native";
import { INDEPENDENCE, SPACE_CADET } from "../../../assets/Color";

const Tab = createBottomTabNavigator();

function AppStack(){
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        color = focused ? SPACE_CADET : INDEPENDENCE;
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                        color = focused ? SPACE_CADET : INDEPENDENCE;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: SPACE_CADET,
                tabBarInactiveTintColor: INDEPENDENCE
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export { AppStack }