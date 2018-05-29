import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum'
    }
]

export default class AccordionView extends Component{
    _renderSectionTitle(section){
        return(
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }
    _renderHeader(section){
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    }
    _renderContent(section){
        return(
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }
    render(){
        return(
            <Accordion
                sections={SECTIONS}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    },
    headerText: {
        alignItems: 'center'
    },
    content: {
        alignItems: 'center'
    }
});