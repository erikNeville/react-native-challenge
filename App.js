import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MyStack from "./src/components/MyStack";

import useFonts from "./hooks/useFonts";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
