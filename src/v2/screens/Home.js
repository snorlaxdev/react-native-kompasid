import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    TouchableHighlight
} from "react-native";
import { Button, Container, Header, Icon, Left, Right, Body, Content, Tabs, Tab, TabHeading, ScrollableTab, Text, Item, Input } from "native-base";
import NewsList from "../NewsList";

class Home extends Component{
    // Constructor
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            pages: [
                {
                    id: 1,
                    name: "Home",
                    active: true
                },
                {
                    id: 2,
                    name: "Search",
                    active: false
                }
            ],
            tabs: [
                {
                    id: 1,
                    name: "Terbaru"
                },
                {
                    id: 2,
                    name: "Rekomendasi"
                },
                {
                    id: 3,
                    name: "Bebas Akses"
                },
                {
                    id: 4,
                    name: "Terpopuler"
                },
                {
                    id: 5,
                    name: "Cetak"
                },
            ]
        }
    }
    // Switch page
    setActivePage(page){
        const pages = this.state.pages;
        switch (page) {
            case 0:
                pages[0].active = true;
                pages[1].active = false;
                this.forceUpdate();
                break;
            case 1:
                pages[0].active = false;
                pages[1].active = true;
                this.forceUpdate();
                break;
            default:
                pages[0].active = true;
                pages[1].active = false;
                this.forceUpdate();
                break;
        }
    }
    // Render active page
    renderActivePage(){
        if (this.state.pages[0].active){
            return (
                <Container>
                    <Header style={styles.defaultBackgroundColor} hasTabs>
                        <Left>
                            <Button transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Left> 
                            <Button transparent onPress={() => this.setActivePage(1)}><Icon name="md-search"/></Button>
                        </Left>
                        <Body>
                            <Image source={require('../../../assets/images/kompas_mainscreen_logo.png')} style={{width: 128, height: 33}}/>
                        </Body>
                        <Right/>
                    </Header>
                    <Tabs renderTabBar={() => <ScrollableTab/>}>
                        {this.state.tabs.map((tab) => (
                            <Tab heading={
                                <TabHeading style={styles.defaultBackgroundColor}>
                                    <Text uppercase={true}>{tab.name}</Text>
                                </TabHeading>
                            } key={tab.id}><NewsList/></Tab>
                        ))}
                    </Tabs>
                </Container>
            );
        }
        if (this.state.pages[1].active){
            return (
                <Container>
                    <Header style={styles.defaultBackgroundColor}>
                        <Left style={{flex: 1, flexDirection: 'row'}}>
                            <Button transparent onPress={() => this.setActivePage(0)}>
                                <Icon name='arrow-back'/>
                            </Button>
                            <Button transparent style={{ marginLeft: 16}} onPress={() => this.setActivePage(0)}>
                                <Icon name='md-search'/>
                            </Button>
                        </Left>
                        <Body style={{flex: 1}}>
                            <Item>
                                <Input style={[styles.defaultBackgroundColor, styles.defaultColor]} placeholder='Cari...' placeholderTextColor='#a9a9a9'/>
                            </Item>
                        </Body>
                        <Right/>
                    </Header>
                </Container>
            );
        }
    }
    // 
    render(){
        return (
            <Container>
                { this.renderActivePage() }
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    defaultBackgroundColor: {
        backgroundColor: "#00599A",
    },
    defaultColor: {
        color: "#fff"
    }
})

export default Home;