import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20

    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 'auto',
        padding: 10,
        gap: 30,
        justifyContent: 'space-evenly'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

const FormularioFornecedor = ({ fornecedor, closeModal, atualizar }) => {
    const [state, setState] = useState(fornecedor);

    const pickImage = async () => {
        await Camera.requestCameraPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setState({ ...state, imagem: result.assets[0].uri })
        }
    };

    return (
        <Modal animationType="slide">
            <View style={styles.container}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={text => setState({ ...state, nome: text })} defaultValue={state.nome} />

                <Text style={styles.label}>Endereço:</Text>
                <TextInput style={styles.input} onChangeText={text => setState({ ...state, endereco: text })} defaultValue={state.endereco} />

                <Text style={styles.label}>Contato:</Text>
                <TextInput style={styles.input} onChangeText={text => setState({ ...state, contato: text })} defaultValue={state.contato} />

                <Text style={styles.label}>Categoria:</Text>
                <TextInput style={styles.input} onChangeText={text => setState({ ...state, categoria: text })} defaultValue={state.categoria} />


                {state.imagem && <Image source={{ uri: state.imagem }} contentFit='fill' style={{ marginTop: 20, width: "100%", height: 300 }} />}

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={closeModal} >
                        <Text style={styles.text}>Cancelar</Text>
                    </Pressable >

                    <Pressable style={styles.button} onPress={pickImage} >
                        <Text style={styles.text}>Escolher Imagem</Text>
                    </Pressable >

                    <Pressable style={styles.button} onPress={() => { atualizar(state, state.id); closeModal(); }} >
                        <Text style={styles.text}>{state.id ? "Atualizar" : "Criar"}</Text>
                    </Pressable >
                </View>
            </View>
        </Modal>
    );
};

export default FormularioFornecedor;