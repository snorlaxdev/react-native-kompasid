import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";

import HomeScreen from "./screens/Home";
import ePaperScreen from "./screens/ePaper";
import BookScreen from "./screens/Book";

import EPaperView from "./EPaperView";
import BookView from "./BookView";

const ePaperStack = createStackNavigator({
    "ePaper" : ePaperScreen,
    "ePaperView" : EPaperView
},
{
    initialRouteName: "ePaper",
    headerMode: "none"
});

const BookStack = createStackNavigator({
    "Book": BookScreen,
    "BookView": BookView
},
{
    initialRouteName: "Book",
    headerMode: "none"
});

const RootNavigator = createBottomTabNavigator({
    "Kompas.id": {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Icon style={{color: `${tintColor}`}} name="md-phone-portrait"/>
            )
        }
    },
    "ePaper": {
        screen: ePaperStack,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Icon style={{color: `${tintColor}`}} name="md-paper"/>
            )
        }
    },
    "Buku": {
        screen: BookStack,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Icon style={{color: `${tintColor}`}} name="md-book"/>
            )
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: '#2196F3',
        inactiveTintColor: '#808285',
        style: {
            height: 60
        },
        labelStyle: {
            fontSize: 14
        }
    }
});

const styles = StyleSheet.create({
    active: {
        color: 'blue'
    },
    inactive: {
        color: 'black'
    }
});

export default RootNavigator;