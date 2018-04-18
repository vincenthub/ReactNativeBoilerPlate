import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";

import registerScreens from "./src/views";

import { appInitialized, login } from "./src/actions";

const store = configureStore();

registerScreens(store, Provider);

// notice that this is just a simple class, it's not a React component
export default new class App {
  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }

  onStoreUpdate() {
    const { root } = store.getState().nav;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    switch (root) {
      case "login":
        Navigation.startSingleScreenApp({
          screen: {
            screen: "sgcm.Screen1",
            title: "Login",
            navigatorStyle: {}
          }
        });
        return;
      default:
        console.error("Unknown app root");
    }
  }
}();
