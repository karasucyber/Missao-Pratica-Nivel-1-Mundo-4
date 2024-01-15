import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import MyComponent from '../Parte1';
import Parte2 from '../Parte2';
import NewFlatList from '../Parte3';
import DisplayAnImage from '../Parte5';

const Container = styled.View({
  
})

export default function App() {
  return (
<Container> 
  <Text> Bem vindo á Karasu Corp</Text>
  <Text> Este app está em processo de desenvolvimento</Text>
  <MyComponent/>
  <Parte2/>
  <NewFlatList/>
  <SectionList/>
  <DisplayAnImage/>
  <DisplayAnImage/>
</Container>
  );
}


