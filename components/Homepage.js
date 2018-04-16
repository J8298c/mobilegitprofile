import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

class Homepage extends Component {
  static navigationOptions = {
    title: "App Title"
  };
  render() {
    return (
      <View style={styles.homeContainer}>
        <View>
          <Ionicons name="logo-github" color="white" style={styles.iconStyle} />
        </View>
        <Button
          title="Login"
          raised
          style={styles.buttonContainer}
          backgroundColor="#536DFE"
        />
      </View>
    );
  }
}

const styles = {
  homeContainer: {
    flex: 1,
    backgroundColor: "#3F51B5",
    justifyContent: "center"
  },
  titleContainer: {
    textAlign: "center",
    fontSize: 45,
    marginBottom: 100,
    color: "#fcfcfc"
  },
  iconStyle: {
    fontSize: 145,
    marginBottom: 100,
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    backgroundColor: "#C5CAE9"
  }
};

export default Homepage;
