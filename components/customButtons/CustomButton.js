import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ViewPropTypes } from "react-native";

import styles from "./styles";

class CustomButton extends Component {
  render() {
    const { title, icon, style } = this.props;

    return (
      <View style={[style, styles.primaryStyle]}>
        <View style={styles.iconView} />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  }
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  style: ViewPropTypes.style
};

CustomButton.defaultProps = {
  title: "Custom Button"
};

export default CustomButton;
