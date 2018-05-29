import { createStackNavigator } from "react-navigation";

import AppHome from "./AppHome";
import AppSearch from "../AppSearch/AppSearch";

const HomeStack = createStackNavigator({
    "Kompas.id" : AppHome,
    "Search" : AppSearch
}, {
    initialRouteName: "Kompas.id",
    headerMode: "none",
});

export default HomeStack;