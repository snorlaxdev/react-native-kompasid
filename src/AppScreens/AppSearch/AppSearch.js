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
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-search'/>
                        </Button>
                    </Left>
                    <Item>
                        <Input style={{backgroundColor: '#00599A', color: '#fff'}} placeholder='Cari...' placeholderTextColor='#a9a9a9'/>
                    </Item>
                </Header>
            </Container>
        );
    }
}

export default withNavigation(AppSearch);