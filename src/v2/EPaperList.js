import React, { Component } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, DeckSwiper, View, ListItem } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { withNavigation } from "react-navigation";

class EPaperList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Wow",
                    description: "This is a test",
                    published_on: "This is a test"
                },
                {
                    id: 2,
                    title: "This is a test2",
                    description: "This is a test2",
                    published_on: "This is a test"
                },
                {
                    id: 3,
                    title: "This is a test3",
                    description: "This is a test3",
                    published_on: "This is a test"
                },
                {
                    id: 4,
                    title: "This is a test4",
                    description: "This is a test4",
                    published_on: "This is a test"
                },
                {
                    id: 5,
                    title: "This is a test5",
                    description: "This is a test5",
                    published_on: "This is a test"
                },
                {
                    id: 6,
                    title: "This is a test6",
                    description: "This is a test6",
                    published_on: "This is a test"
                },
                {
                    id: 7,
                    title: "This is a test7",
                    description: "This is a test7",
                    published_on: "This is a test"
                },
                {
                    id: 8,
                    title: "This is a test8",
                    description: "This is a test8",
                    published_on: "This is a test"
                },
            ],
            swiper_items: [
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
                }
            ]
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    {/* <ListItem>
                        <View style={{padding: 30}}>
                            <DeckSwiper
                                dataSource={this.state.swiper_items}
                                renderItem={(item) => (
                                    <Card style={{ elevation: 3 }}>
                                        <CardItem cardBody>
                                            <Image style={{height: 150}} source={require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')}/>
                                        </CardItem>
                                        <CardItem style={{backgroundColor: '#000', paddingTop: 2, paddingLeft: 5, paddingBottom: 2}}>
                                            <Left>
                                                <Text style={{color: '#fff', fontSize: 12}}>{item.description}</Text>
                                            </Left>
                                            <Right>
                                                <Icon name='md-cart'/>
                                            </Right>
                                        </CardItem>
                                    </Card>
                                )}
                            />
                        </View>
                    </ListItem> */}
                    <ListItem>
                        <View style={{padding: 10, alignContent: 'center'}}>
                            {/* <Content containerStyle={{alignItems: 'center'}}> */}
                            <FlatList
                                    data={this.state.items}
                                    numColumns={2}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item}) => (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ePaperView', { item })}>
                                            <Card>
                                                <CardItem cardBody>
                                                    <Image source={require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')} style={{resizeMode: 'contain'}}/>
                                                </CardItem>
                                                <CardItem style={{backgroundColor: '#000', paddingTop: 2, paddingLeft: 5, paddingBottom: 2}}>
                                                    <Left>
                                                        <Text style={{color: '#fff', fontSize: 12}}>{item.description}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name='md-cart'/>
                                                    </Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>
                                    )}
                                />
                            {/* </Content> */}
                        </View>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default withNavigation(EPaperList);