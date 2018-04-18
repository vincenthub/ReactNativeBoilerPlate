import { Navigation } from "react-native-navigation";

import Screen1 from "./screen1";

export default function registerScreens(store, Provider) {
  Navigation.registerComponent("sgcm.Screen1", () => Screen1, store, Provider);
}
