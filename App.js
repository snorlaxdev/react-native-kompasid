import React, { Component } from "react";
import { Container, Content } from "native-base";

import AppScreens from "./src/AppScreens/index";
import AppStartup from "./src/AppScreens/AppStartup/AppStartup";
import RootNavigator from "./src/v2/RootNavigator";

export default class App extends Component{
  render(){
    return(
        <Container>
            {/* <AppScreens/> */}
            {/* <HomeScreen/> */}
            {/* <AppStartup/> */}
            <RootNavigator/>
            {/* <Swiper/> */}
        </Container>
    );
  }
}

