import React, { Component } from "react";
import { Image, TouchableOpacity, FlatList} from "react-native";
import { Container, Content, View, Button, Card, CardItem, Left, Body, Right, Icon, Text } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";

import AppHeader from '../../AppHeader/AppHeader';

export default class AppBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 2,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 3,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 4,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 5,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 6,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 7,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
                {
                    id: 8,
                    name: "This is a test",
                    description: "This is a test",
                    publish_date: ""
                },
            ]
        }
    }

    render(){
        return(
            <Container>
                <AppHeader/>
                <Content/>
            </Container>
        );
    }
}