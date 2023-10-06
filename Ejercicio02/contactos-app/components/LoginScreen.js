import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import usersData from "../src/users.json";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // Credenciales válidas
      Alert.alert("Credenciales válidas", "Inicio de sesión exitoso");
      navigation.navigate("Contactos");
    } else {
      // Credenciales inválidas
      Alert.alert(
        "Credenciales inválidas",
        "Por favor, verifica tus credenciales"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.button} title="Login" onPress={handleLogin} />
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.textFooter}>¿No tienes cuenta? Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignContent: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    margin: 90,
    justifyContent: "center",
  },
  inputContainer: {
    width: '90%',
    height: 40,
    margin: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: "center",
  },
  input: {
    height: 40,
    padding: 10,
    color: '#333',
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    paddingLeft: 30,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    fontWeight: 'bold',
    borderRadius: 5,
  },
  footer: {
    height: 40,
    color: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "center",
  },
  textFooter: {
    color: 'blue',
  },
});

export default LoginScreen;
