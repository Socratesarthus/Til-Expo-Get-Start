import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import logo from './assets/icons8-psychotherapy-100.png';
import FormCreateClient from "./components/FormCreateClient";

export default function App() {  
  
  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />          

      <FormCreateClient />      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {    
    width: 120,
    height: 120,
    marginBottom: 10,
  }
});
