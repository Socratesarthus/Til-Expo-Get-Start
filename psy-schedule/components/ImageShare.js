import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from '../assets/FormCreateClient-logo.png';

export default function ImageShare() {
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult.uri);

        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickerResult.uri });
    };

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
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

            <TouchableOpacity
                onPress={openImagePickerAsync}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Inserir foto</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#f1bc19",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        borderRadius: 99
    },

});