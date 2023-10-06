import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import usersData from "../src/users.json";

const RegistroScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = () => {
    // Verificar si el usuario ya existe
    const userExists = usersData.users.some(
      (user) => user.username === username
    );

    if (userExists) {
      Alert.alert(
        "Usuario existente",
        "El nombre de usuario ya está registrado."
      );
    } else {
      // Agregar el nuevo usuario al archivo users.json
      const newUser = { username, password };
      usersData.users.push(newUser);

      // Mostrar una alerta de éxito
      Alert.alert(
        "Registro exitoso",
        "Tu cuenta ha sido registrada exitosamente."
      );

      // Navegar de regreso a la pantalla de inicio de sesión
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registrarse</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Registrarse" onPress={handleRegistro} />
      </View>
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
    margin: 100,
    justifyContent: "center",
  },
  inputContainer: {
    width: "90%",
    height: 40,
    margin: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    padding: 10,
    color: "#333",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    paddingLeft: 30,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 5,
  },
});

export default RegistroScreen;
