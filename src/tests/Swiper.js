import React, { Component } from 'react';
import { Image } from "react-native";
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Right } from "native-base";

class Swiper extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {
                    text: 'Card one',
                    name: 'One',
                    image: require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')
                },
                {
                    text: 'Card two',
                    name: 'Two',
                    image: require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')
                },
                {
                    text: 'Card three',
                    name: 'Three',
                    image: require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')
                },
                {
                    text: 'Card Four',
                    name: 'Four',
                    image: require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')
                },
                {
                    text: 'Card Five',
                    name: 'Five',
                    image: require('../../assets/images/ic_default_image_artikel_kompas_crop_top.jpg')
                },
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header/>
                <View>
                    <DeckSwiper
                        dataSource={this.state.cards}
                        renderItem={(item) => (
                            <Card style={{ elevation: 3 }}>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image}/>
                                </CardItem>
                            </Card>
                        )}
                    />
                </View>
            </Container>
        );
    }
}

export default Swiper;