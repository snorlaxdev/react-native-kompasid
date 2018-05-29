import { createStackNavigator } from "react-navigation";

import AppEpaper from "./AppEpaper";
import AppSearch from "../AppSearch/AppSearch";
import AppEpaperItem from "../AppEpaperItem/AppEpaperItem";

const EpaperStack = createStackNavigator({
    "ePaper" : AppEpaper,
    "Search" : AppSearch,
    "item" : AppEpaperItem
}, {
    initialRouteName: "ePaper",
    headerMode: "none",
})

export default EpaperStack;