import React, { Component } from "react";
import { Image } from 'react-native';
import { Body, Button, Container, Header, Icon, Left, Right, ScrollableTab, Tab, TabHeading, Tabs, Text } from "native-base";

import AppHeader from '../../AppHeader/AppHeader';
import Newest from '../../Pages/Newest';

export default class AppHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabs : [
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
    
    render(){
        return(
            <Container>
                <AppHeader/>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    {this.state.tabs.map((tab) => (
                        <Tab heading={
                            <TabHeading style={{backgroundColor: '#00599A'}}><Text uppercase={true} style={{fontSize: 16}}>{tab.name}</Text></TabHeading>
                        } key={tab.id}><Newest/></Tab>
                    ))}
                </Tabs>
            </Container>
        );
    }
}