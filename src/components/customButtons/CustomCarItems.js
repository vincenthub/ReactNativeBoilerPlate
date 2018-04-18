import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ViewPropTypes } from "react-native";

import styles from "./styles";

const CustomCarItems = props => {
  const { title, discription, icon, style } = props;

  return (
    <View style={[style, styles.secondaryStyle]}>
      <View style={styles.carItemIcon} />
      <View style={styles.carContent}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.discriptionText}>{discription}</Text>
      </View>
    </View>
  );
};

CustomCarItems.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  icon: PropTypes.any,
  style: ViewPropTypes.style
};

CustomCarItems.defaultProps = {
  title: "Custom Button",
  discription: "Car shor discription"
};

export default CustomCarItems;
