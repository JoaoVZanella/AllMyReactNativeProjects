import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity ,View } from "react-native";

const HomeScreen = ({ navigation }) => {

  return(
  <View> 
    <Text style={styles.text}>by João Zanella</Text>

    <Button
    onPress={() => navigation.navigate('Components')}
    title="Página de Componentes"/>
    
    <Button
    onPress={() => navigation.navigate('List')}
    title="Página de Listas"
    />

    <Button
    onPress={() => navigation.navigate('Image')}
    title="Página de Imagens"
    />

  <Button
    onPress={() => navigation.navigate('Counter')}
    title="Contador"
    />

  <Button
    onPress={() => navigation.navigate('Color')}
    title="Página de Cores Randomicas"
    />

  <Button
      onPress={() => navigation.navigate('ColorMoreAndLess')}
      title="Página de Cores Selecionaveis"
    />

  <Button
      onPress={() => navigation.navigate('Reducer')}
      title="Teste de Reducer"
    />

    <Button
      onPress={() => navigation.navigate('Input')}
      title="Página de Input"
    />

    <Button
      onPress={() => navigation.navigate('Box')}
      title="BOX"
    />
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center"
  },

});

export default HomeScreen;
