import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ArticlesFeed from "./ArticlesFeed";
import VideosFeed from "./VideosFeed";

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#BF1313",
      labelStyle: styles.label
    }}
  >
    <Tab.Screen name="Articles" component={ArticlesFeed} />
    <Tab.Screen name="Videos" component={VideosFeed} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlignVertical: "center",
    fontFamily: "Visby-Bold",
    fontSize: 18
  }
});

export default MyTabs;
