import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ContactListScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [showEmptyMessage, setShowEmptyMessage] = useState(
    contacts.length === 0
  );
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setShowEmptyMessage(contacts.length === 0);
  }, [contacts]);

  useEffect(() => {
    if (route.params && route.params.nuevoContacto) {
      setContacts([...contacts, route.params.nuevoContacto]);
      setNextId(nextId + 1);
    }
  }, [route.params]);

  const eliminarContacto = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const navigateToAddContact = () => {
    navigation.navigate("Agregar Contacto"); // Navigate to the "AgregarContacto" screen
  };

  return (
    <View style={styles.container}>
      {showEmptyMessage ? (
        <View style={styles.emptymessageContainer}>
          <Text style={styles.emptymessage}>No hay contactos registrados</Text>
        </View>
      ) : (
        <View style={styles.contactList}>
          <FlatList
            data={contacts}
            renderItem={({ item }) => (
              <View style={styles.contactItem}>
                <Text style={styles.info}>
                  {item.nombre} {item.apellidos}
                </Text>
                <Text style={styles.infoPhone}>{item.telefono}</Text>
                <TouchableOpacity style={styles.deleteButtonCont} onPress={() => eliminarContacto(item.id)}>
                  <Text style={styles.deleteButton}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={navigateToAddContact}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  emptymessage: {
    marginTop: 30,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center"
  },
  contactList: {
    width: "100%",
    padding: 10,
  },
  info: {
    fontWeight: "bold",
    fontSize: 20,
  },
  contactItem: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  deleteButton: {
    color: "white",
    backgroundColor: "red",
    fontSize: 16,
    borderRadius: 15,
    width: 80,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
    height: 50,
    top: 400,
    right: 10,
  },
  addButton: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ContactListScreen;
