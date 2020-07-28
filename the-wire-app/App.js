import React, { useState, useEffect } from "react";
import { Root } from "native-base";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ConnectView from "./screens/connect";
import MainView from "./screens/main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CallsScreen from "./screens/calls";

const Stack = createStackNavigator();

const App = () => {
  setTimeout(() => {
    StatusBar.setBackgroundColor("#7E8C12");
  }, 100);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connect" component={ConnectView} />
        <Stack.Screen name="Main" component={MainView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
