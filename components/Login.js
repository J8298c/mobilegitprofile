import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class Login extends Component {
	state = {};

	onLogin() {
		console.log(this.state);
	}

	render() {
		return (
			<View style={styles.formContainer}>
				<View>
					<FormLabel>Username</FormLabel>
					<FormInput
						onChangeText={username =>
							this.setState({ username: username })
						}
					/>
				</View>
				<View>
					<FormLabel>Password</FormLabel>
					<FormInput
						onChangeText={password =>
							this.setState({ password: password })
						}
					/>
				</View>
				<Button
					title="Login"
					raised
					style={styles.buttonContainer}
					backgroundColor="#536DFE"
					onPress={() => this.onLogin()}
				/>
			</View>
		);
	}
}

const styles = {
	buttonContainer: {
		display: "flex",
		backgroundColor: "#C5CAE9",
		marginTop: 55
	},
	formContainer: {
		marginTop: 55
	}
};

export default Login;
