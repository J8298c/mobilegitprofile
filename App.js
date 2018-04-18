import { StackNavigator } from "react-navigation";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
const App = StackNavigator({
	Home: { screen: Homepage },
	Login: { screen: Login }
});

export default App;
