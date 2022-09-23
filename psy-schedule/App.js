import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import FormCreateClient from "./components/FormCreateClient";

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container} >
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        Tela para adcionar clientes:
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Adicionar foto</Text>
      </TouchableOpacity>

      <FormCreateClient />

      <TouchableOpacity onPress={() => alert('Quase lá!')} style={styles.button}>
        <Text style={styles.buttonText}>Salvar tudo</Text>
      </TouchableOpacity>

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
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    padding: 20,
  },
  button: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
