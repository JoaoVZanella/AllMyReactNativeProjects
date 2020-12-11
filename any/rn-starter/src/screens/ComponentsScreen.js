// Passo 1 - Importar libs
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Passo 2 - Criar Componente - Função que retorna um JSX (HTML do React)
const firstComponent = () => {
    const name = 'João Zanella'


    return (
    <View>
        <Text style={styles.textStyle}>Getting Started with React Native</Text>
        <Text style={styles.nameStyle}>My name is {name}</Text>
    </View>
    )


};

// Passo 3 - Estilizar o componente
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
        // color: '#ff0000',
        // alignSelf: 'center'
    },
    nameStyle: {
        fontSize: 20
    }

});

// Passo 4 - Exportar o Componente para podermos usar-lo em todo o programa.
export default firstComponent; 