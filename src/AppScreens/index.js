import React, { Component } from "react";
import { Image } from "react-native";
import { createStackNavigator, createBottomTabNavigator, NavigationActions } from "react-navigation";

import HomeStack from "./AppHome/index";
import EpaperStack from "./AppEpaper/index";
import BookStack from "./AppBook/index";
import AppSearch from "./AppSearch/AppSearch";


const BottomNavigation = createBottomTabNavigator({
    "Kompas.id": HomeStack,
    "ePaper": EpaperStack,
    "Buku": BookStack
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName == "Kompas.id") {
                return (
                    <Image source={require('../../assets/images/ic_menu_kompasid.png')} style={{width: 32, height: 32}}/>
                );
            } else if (routeName == "ePaper") {
                return (
                    <Image source={require('../../assets/images/ic_menu_epaper.png')} style={{width: 32, height: 32}}/>
                );
            } else if (routeName == "Buku") {
                return (
                    <Image source={require('../../assets/images/ic_menu_buku.png')} style={{width: 32, height: 32}}/>
                );
            }
        }
    })
});

export default class AppScreens extends Component{
    render(){
        return(
            <BottomNavigation/>
        );
    }
}
