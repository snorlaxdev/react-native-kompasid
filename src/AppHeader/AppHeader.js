import React, { Component } from "react";
import { Image } from 'react-native';
import { Button, Container, Header, Icon, Left, Body, Right } from "native-base";
import { withNavigation } from 'react-navigation';

class AppHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Header hasTabs style={{backgroundColor: '#00599A'}}>
                <Left>
                    <Button transparent><Icon name='menu'/></Button>
                </Left>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('Search')}><Image source={require('../../assets/images/ic_search.png')} style={{width: 24, height: 24}}/></Button>
                </Left>
                <Body>
                    <Image source={require('../../assets/images/kompas_mainscreen_logo.png')} style={{width: 128, height: 33}}/>
                </Body>
                <Right/>
            </Header>
        );
    }
}

export default withNavigation(AppHeader);
