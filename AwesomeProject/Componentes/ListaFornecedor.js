import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import FormularioFornecedor from './FormularioFornecedor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        width: "100%"
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: "60%",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    pesquisaContainer: {
        flexDirection: 'row',
        padding: 10,
        gap: 30,
        justifyContent: 'flex-start',
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
        paddingHorizontal: 32,
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

const ListaFornecedores = ({ fornecedores, atualizarFornecedores }) => {
    const [showModal, setShowModal] = useState({ visible: false, id: -1 });
    const [pesquisa, setPesquisa] = useState("");

    const closeModal = () => {
        setShowModal({ visible: false, id: -1 })
    }

    const atualizar = (fornecedor, id) => {
        if (id) {
            let index = fornecedores.findIndex(x => x.id == showModal.id);
            fornecedores[index] = fornecedor;
        } else {
            fornecedor.id = Math.max(...fornecedores.map(x => x.id)) + 1;
            fornecedores.push(fornecedor);
        }
        atualizarFornecedores(fornecedores)
    }

    return (
        <View style={styles.container}>
            <View style={styles.pesquisaContainer}>
                <Text style={styles.label}>Pesquisa:</Text>
                <TextInput style={styles.input} value={pesquisa} onChangeText={setPesquisa} />
            </View>
            <View>
                <FlatList style={{height: "80%"}}
                    data={pesquisa ? fornecedores.filter(x => x.nome.toLowerCase().includes(pesquisa.toLowerCase())) : fornecedores}
                    renderItem={({ item }) =>
                        <>
                            <Pressable onPress={() => setShowModal({ visible: true, id: item.id })}>
                                <View>
                                    <Text style={styles.item}>{item.nome}</Text>
                                </View>
                            </Pressable>
                        </>
                    }
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => setShowModal({ visible: true, id: -1 })} >
                    <Text style={styles.text}>Novo</Text>
                </Pressable >
            </View>
            {showModal.visible &&
                <FormularioFornecedor
                    fornecedor={showModal.id != -1 ? fornecedores.find(x => x.id == showModal.id) : {}}
                    atualizar={atualizar}
                    closeModal={closeModal}>
                </FormularioFornecedor>
            }
        </View>
    );
};

export default ListaFornecedores;