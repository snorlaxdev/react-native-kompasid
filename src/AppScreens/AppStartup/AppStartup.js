import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Button, DeckSwiper, Card, CardItem, Thumbnail, Text, View } from "native-base";

const tests = [
    {
        id: 1,
        text: "This is a test"
    },
    {
        id: 2,
        text: "This is a test"
    },
    {
        id: 3,
        text: "This is a test"
    },
    {
        id: 4,
        text: "This is a test"
    },
    {
        id: 5,
        text: "This is a test"
    }
]

export default class AppStartup extends Component{
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('../../../assets/images/kompas_onboarding_logo.png')} style={{width: 160, height: 90, resizeMode: 'contain'}}/>
                {tests.map((item, index) => (
                    <Text key={index}>{item.text}</Text>
                ))}
            </View>
        );
    }
}