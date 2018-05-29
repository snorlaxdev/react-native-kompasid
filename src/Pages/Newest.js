import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default class Newest extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>This is a test Page</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}