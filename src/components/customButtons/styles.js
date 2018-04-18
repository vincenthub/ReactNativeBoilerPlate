/* eslint-disable */
"use strict";

import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

module.exports = StyleSheet.create({
  primaryStyle: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  textStyle: {
    color: "#2E302F",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginHorizontal: 3
  },

  iconView: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginHorizontal: 10
  },

  secondaryStyle: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: width * 0.8,
    borderRadius: 3
  },

  carContent: {
    flex: 1,
    alignItems: "flex-start",
    alignSelf: "center",
    padding: 5
  },
  carItemIcon: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 2,
    marginHorizontal: 10
  },
  titleText: {
    fontSize: 12,
    color: "#0C90DB",
    fontWeight: "bold"
  },
  discriptionText: {
    fontSize: 12,
    color: "#2E302F",
    fontWeight: "400"
  }
});
