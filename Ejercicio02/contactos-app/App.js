import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import RegistroScreen from "./components/RegistroScreen";
import ContactListScreen from "./components/ContactListScreen";
import AgregarContacto from "./components/AgregarContacto";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerLeft: null,
            title: null,
          }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistroScreen}
          options={{
            title: null,
          }}
        />
        <Stack.Screen
          name="Contactos"
          component={ContactListScreen}
          options={{
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Agregar Contacto"
          component={AgregarContacto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;


