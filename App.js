import { StackNavigator } from "react-navigation";
import Homepage from "./components/Homepage";

const App = StackNavigator({
	Home: { screen: Homepage }
});

export default App;
