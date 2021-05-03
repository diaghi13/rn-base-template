import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text } from "../components";
import { RootStackParamList, StackNavigationProps } from "../types/navigation";

const HomeScreen = ({ navigation, route }: StackNavigationProps<RootStackParamList, "Home">) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="header" marginBottom="s">Home Screen</Text>
            <Text variant="subheader" marginBottom="l">Ready for a new app?</Text>
            <Text variant="body">This is only a template starting point</Text>
        </Box>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;
