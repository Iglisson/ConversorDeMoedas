import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/screens/Home";
import Euro from "./src/components/screens/Euro";
import Dolar from "./src/components/screens/Dolar";

const Stack = createNativeStackNavigator();

export default function App() {

  const Header = {
    title: "Conversor de Moeda",
    headerStyle: {
      backgroundColor: "#11538C",
    },
    headerTintColor: "#F0F1F2",
    headerTitleAlign: "center"
  }

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" >

        <Stack.Screen name="Home" component={Home} options={Header} />
        <Stack.Screen name="Dolar" component={Dolar} options={Header} />
        <Stack.Screen name="Euro" component={Euro} options={Header} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
