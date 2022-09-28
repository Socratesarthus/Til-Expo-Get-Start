import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import ImageShare from "./ImageShare";

const FormCreateClient = () => {
  const [nameClient, onChangeNameClient] = React.useState(null);
  const [emailClient, onChangeEmailClient] = React.useState(null);
  const [phoneNumber, onChangePhoneNumber] = React.useState(null);
  const [users, setUser] = React.useState([
    {
      id: '1',
      name: 'clinte 01',
      phone: '31988776655',
      email: 'email@email.com',
      photo: ''
    }
  ]);


  return (
    <SafeAreaView style={{ padding: 10 }}>

      <ImageShare />

      <TextInput
        style={styles.input}
        onChangeNameClient={onChangeNameClient}
        value={nameClient}
        placeholder="Nome do cliente"
        keyboardType='name-phone-pad'
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phoneNumber}
        placeholder="Telefone do cliente"
        keyboardType="number-pad"
        maxLength={11}
      />

      <TextInput
        style={styles.input}
        onChangeEmailClient={onChangeEmailClient}
        value={emailClient}
        placeholder="Email do cliente"
        keyboardType='email-address'
      />

      <TouchableOpacity
        onPress={console.log({users})}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Salvar tudo!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    minWidth: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#f1bc19",
    padding: 20,
    borderRadius: 5,
    maxWidth: 140,     
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default FormCreateClient;
