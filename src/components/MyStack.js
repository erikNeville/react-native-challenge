import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import IGNLogo from "./IGNLogo";
import MyTabs from "./MyTabs";
import { ExternalView } from "../shared/ExternalView";

const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{
        headerTitle: () => <IGNLogo color='#ffff' style={styles.logo} />,
        headerStyle: styles.header,
      }}
      component={MyTabs}
    />
    <Stack.Screen
      name="Article"
      component={ExternalView}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  logo: {
    height: 30,
    width: 60,
    flex: 1,
    alignSelf: 'center'
  },
  header: {
    backgroundColor: "#BF1313",
  }
});

export default MyStack;
