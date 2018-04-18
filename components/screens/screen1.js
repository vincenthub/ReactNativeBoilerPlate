import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default Screen1;
