import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ListaFornecedores from './components/ListaFornecedores';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((newData) => {
      if (!newData || JSON.stringify(newData) === '{}' || JSON.stringify(newData) === '[]') {
        newData = [
          { id: 1, nome: "Pessoa de Exemplo 1", endereco: "teste", contato: "teste", categoria: "teste" },
          { id: 2, nome: "Pessoa de Exemplo 2", endereco: "teste", contato: "teste", categoria: "teste" }];
      }
      setData(newData);
    });
  }, [])

  const atualizarFornecedores = (fornecedores) => {
    setData(fornecedores)
    storeData(fornecedores)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListaFornecedores fornecedores={data} atualizarFornecedores={atualizarFornecedores}></ListaFornecedores>
    </View>
  );
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50
  },
});