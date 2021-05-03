import React from "react";
import { ColorSchemeName } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import RootStackNavigator from "./RootStackNavigator";

const Navigator = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    return (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootStackNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    )
};

export default Navigator;
