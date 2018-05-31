import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 2,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 3,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 4,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 5,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 6,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 7,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 8,
                    title: "This is a test",
                    description: "This is a test",
                    published_on: "This is a test"
                },
            ]
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Grid>
                        { this.state.items.map((item) => (
                            <Row key={item.id}>
                                <Card>
                                    <CardItem cardBody>
                                        <ImageBackground source={require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{height: 200, width: null, flex: 1}}>
                                            <Text style={{color: '#fff', marginTop: 160, marginLeft: 20}}>This Is A Test</Text>
                                        </ImageBackground>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text style={{ fontSize: 12 }}>{item.description}</Text>
                                        </Left>
                                        <Right>
                                            <Icon name='md-share'/>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Row>
                        )) }
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default NewsList;