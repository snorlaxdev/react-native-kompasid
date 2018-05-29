import { createStackNavigator } from "react-navigation";

import AppBook from "./AppBook";
import AppSearch from "../AppSearch/AppSearch";

const BookStack = createStackNavigator({
    "Buku" : AppBook,
    "Search" : AppSearch
}, {
    initialRouteName: "Buku",
    headerMode: "none",
})

export default BookStack;