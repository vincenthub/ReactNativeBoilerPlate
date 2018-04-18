/* eslint-disable */
"use strict";

import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  topView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5
  },
  contentView: {
    flex: 1,
    alignItems: "flex-start",
    margin: 5
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
