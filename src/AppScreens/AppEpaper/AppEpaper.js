import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Container, Content, View, Button, Card, CardItem, Left, Body, Right, Icon, Text } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import { withNavigation, NavigationActions } from "react-navigation";

import AppHeader from '../../AppHeader/AppHeader';

class AppEpaper extends Component{
    static navigationOptions = {
        tabBarVisible: false
    }

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
            ],
            tabBarVisible: true
        }
    }

    render(){
        return(
            <Container>
                <AppHeader/>
                <Content>
                    <Grid>
                        <Row>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('item')}>
                                <Col>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{resizeMode: 'contain'}}/>
                                        </CardItem>
                                        <CardItem style={{backgroundColor: '#000'}} footer>
                                            <Left>
                                                <Text style={{color: '#fff', fontSize: 10, marginLeft: 0, paddingLeft: 0}}>This is a texta</Text>
                                            </Left>
                                            <Right>
                                                <Icon name='md-cart'/>
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </Col>
                            </TouchableOpacity>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{resizeMode: 'contain'}}/>
                                    </CardItem>
                                    <CardItem style={{backgroundColor: '#000'}} footer>
                                        <Left>
                                            <Text style={{color: '#fff', fontSize: 10, marginLeft: 0, paddingLeft: 0}}>This is a text</Text>
                                        </Left>
                                        <Right>
                                            <Icon name='md-cart'/>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{resizeMode: 'contain'}}/>
                                    </CardItem>
                                    <CardItem style={{backgroundColor: '#000'}} footer>
                                        <Left>
                                            <Text style={{color: '#fff', fontSize: 10, marginLeft: 0, paddingLeft: 0}}>This is a text</Text>
                                        </Left>
                                        <Right>
                                            <Icon name='md-cart'/>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{resizeMode: 'contain'}}/>
                                    </CardItem>
                                    <CardItem style={{backgroundColor: '#000'}} footer>
                                        <Left>
                                            <Text style={{color: '#fff', fontSize: 10, marginLeft: 0, paddingLeft: 0}}>This is a text</Text>
                                        </Left>
                                        <Right>
                                            <Icon name='md-cart'/>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default withNavigation(AppEpaper);