import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';
import ImageShare from "./ImageShare";

const FormCreateClient = () => {
  const [nameClient, onChangeNameClient] = React.useState(null);
  const [emailClient, onChangeEmailClient] = React.useState(null);
  const [phoneNumber, onChangePhoneNumber] = React.useState(null);

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormCreateClient;
