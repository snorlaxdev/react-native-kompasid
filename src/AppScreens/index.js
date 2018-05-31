import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation";

import HomeStack from "./AppHome/index";
import EpaperStack from "./AppEpaper/index";
import BookStack from "./AppBook/index";
import AppSearch from "./AppSearch/AppSearch";


const BottomNavigation = createBottomTabNavigator({
    "Kompas.id": {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: (focused) => (
                <Icon style={focused ? icon.active : icon.inactive} name="md-phone-portrait"/>
            )
        }
    },
    "ePaper": {
        screen: EpaperStack,
        navigationOptions: {
            tabBarIcon: (focused) => (
                <Icon color={focused ? "blue" : "black"} name="md-paper"/>
            )
        }
    },
    "Buku": {
        screen: BookStack,
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="md-book"/>
            )
        }
    }
},
{
    tabBarOptions: {
        style: {
            height: 60
        },
        labelStyle: {
            fontSize: 14
        }
    }
});

const icon = StyleSheet.create({
    active: {
        color: 'blue'
    },
    inactive: {
        color: 'black'
    }
});

export default class AppScreens extends Component{
    render(){
        return(
            <BottomNavigation/>
        );
    }
}
