import React, { Component } from "react";
import { Container, Content } from "native-base";

import AppScreens from "./src/AppScreens/index";
import AppStartup from "./src/AppScreens/AppStartup/AppStartup";

export default class App extends Component{
  render(){
    return(
        <Container>
            <AppScreens/>
            {/* <AppStartup/> */}
        </Container>
    );
  }
}