import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const AgregarContacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const navigation = useNavigation();

  const agregarContacto = () => {
    // Valida que los campos no estén vacíos antes de agregar el contacto
    if(nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === ''){
      return;
    }

  const nuevoContacto =  {
      id: Date.now(), // Puedes usar una mejor forma de generar IDs únicos
      nombre: nombre,
      apellidos: apellido,
      telefono: telefono,

  };

  navigation.navigate('Contactos', { nuevoContacto})

};

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Agregar Contacto</Text>
      <TextInput
        placeholder="Nombre del contacto"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        placeholder="Apellido del contacto"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      <TextInput
        placeholder="Telefono del contacto"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
      />
      <Button title="Agregar" onPress={agregarContacto} />
    </View>
  );
};
export default AgregarContacto;