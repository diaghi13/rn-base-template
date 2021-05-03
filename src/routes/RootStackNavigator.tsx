import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types/navigation";
import HomeScreen from "../screens/HomeScreen";

const RootStack = createStackNavigator<RootStackParamList>()

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    )
};

export default RootStackNavigator;
