import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

const FormCreateClient = () => {
  const [nameClient, onChangeNameClient] = React.useState('Nome do cliente');
  const [emailClient, onChangeEmailClient] = React.useState('Email do cliente');
  const [phoneNumber, onChangePhoneNumber] = React.useState(null);

  return (
    <SafeAreaView style={{ padding: 10 }}>
      
      <TextInput style={styles.input} onChangeNameClient={onChangeNameClient} value={nameClient} />
      
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phoneNumber}
        placeholder="Telefone do cliente"
        keyboardType="numeric"
      />
      
      <TextInput style={styles.input} onChangeEmailClient={onChangeEmailClient} value={emailClient} />
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
