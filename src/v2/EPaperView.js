import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Container, Content, Button, Header, Left, Body, Right, Title, Text, Icon, Card, CardItem, View} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";

import { withNavigation } from "react-navigation";

class EPaperView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>{ item.title ? item.title : 'No title found' }</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Card>
                        <ImageBackground source={require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{height: 300, width: null, flex: 1}}>
                            <CardItem style={{backgroundColor: '#000', marginTop: 260}}>
                                <Left>
                                    <Text style={{color: '#fff', fontSize: 12}}>{ item.description ? item.description : 'No description found' }</Text>
                                </Left>
                                <Right>
                                    <Icon name='md-cart'/>
                                </Right>
                            </CardItem>
                        </ImageBackground>
                    </Card>
                    <Grid style={{paddingTop: 60}}>
                        <Row>
                            <Col>
                                <Button rounded style={{ width: 160, height: 60, alignSelf: 'center', justifyContent: 'center'}} success={true}>
                                    <Text>Preview</Text>
                                </Button>
                            </Col>
                            <Col>
                                <Button rounded style={{ width: 160, height: 60, alignSelf: 'center', justifyContent: 'center'}} primary={true}>
                                    <Text>Sign in</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default withNavigation(EPaperView);