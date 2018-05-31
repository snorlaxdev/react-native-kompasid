import React, { Component } from "react";
import { Container, Content, Text, Icon, Input, Header, Left, Body, Right, Button, Item } from "native-base";
import { withNavigation } from "react-navigation";

class AppSearch extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Header searchBar style={{backgroundColor: '#00599A'}}>
                    <Item>
                        <Button style={{backgroundColor: '#00599A'}} transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{backgroundColor: '#00599A', color: '#fff'}} name='arrow-back'/>
                        </Button>
                        <Button style={{backgroundColor: '#00599A'}} transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{backgroundColor: '#00599A', color: '#fff'}} name='ios-search'/>
                        </Button>
                        <Input style={{backgroundColor: '#00599A', color: '#fff', width: 'auto'}} placeholder='Cari...' placeholderTextColor='#a9a9a9'/>
                    </Item>
                </Header>
            </Container>
        );
    }
}

export default withNavigation(AppSearch);