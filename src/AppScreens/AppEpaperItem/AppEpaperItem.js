import React, { Component } from "react";
import { Image } from "react-native";
import { Header, Container, Content, Left, Body, Right, Button, Card, CardItem, Icon, Text } from "native-base";

export default class EpaperItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#00599A'}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Text>This is test</Text>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{backgroundColor: '#000'}} footer>
                            <Left>
                                <Text style={{color: '#fff', fontSize: 18}}>This is a text</Text>
                            </Left>
                            <Right>
                                <Icon name='md-cart'/>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}