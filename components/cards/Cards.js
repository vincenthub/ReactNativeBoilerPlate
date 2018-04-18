import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ViewPropTypes
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import styles from "./styles";

const { height, width } = Dimensions.get("window");

export default class CardsView extends Component {
  render() {
    const { title, showMore, showMoreContent } = this.props;

    let hasMoreContent = showMore ? (
      <View>
        <Text>
          <Icon name={"chevron-right"} size={30} style={{ color: "#463B3B" }} />
        </Text>
      </View>
    ) : null;

    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.titleText}>{title}</Text>
          {hasMoreContent}
        </View>
        <View style={styles.contentView}>{this.props.children}</View>
      </View>
    );
  }
}

CardsView.propTypes = {
  title: PropTypes.string.isRequired,
  showMore: PropTypes.bool.isRequired,
  showMoreContent: PropTypes.object,
  style: ViewPropTypes.style
};

CardsView.defaultProps = {
  title: "Card Title",
  showMore: false
};
