import { createStackNavigator } from "react-navigation";

import AppEpaper from "./AppEpaper";
import AppSearch from "../AppSearch/AppSearch";
import AppEpaperItem from "../AppEpaperItem/AppEpaperItem";

const EpaperStack = createStackNavigator({
    "ePaper" : { screen: AppEpaper },
    "Search" : { screen: AppSearch },
    "item" : { screen: AppEpaperItem }
}, {
    initialRouteName: "ePaper",
    headerMode: "none",
    mode: "modal"
})

export default EpaperStack;