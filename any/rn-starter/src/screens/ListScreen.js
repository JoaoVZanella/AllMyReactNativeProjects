import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {

    const superMarket = [
        {materiais: 'Leite', age: '11'},
        {materiais: 'Cereal', age: '11'},
        {materiais: 'Arroz', age: '11'},
        {materiais: 'Feijão', age: '11'},
        {materiais: 'Carne', age: '11'},
        {materiais: 'Papel Higienico', age: '11'},
        {materiais: 'Chocolate', age: '11'},
        {materiais: 'Sorvete', age: '11'},
        {materiais: 'Uva', age: '11'}

    ]

    return (
        <View>
            <Text style={styles.titleStyle}>Lista do Super Mercado</Text>
            <FlatList 
            // horizontal === literalmente coloca a lista na horizontal
            // horizontal
            //esconde a scrollbar que a horizontal cria
            //showsHorizontalScrollIndicator = {false}


            // keyextractor
            keyExtractor = {id => id.materiais}

            data={superMarket}
            renderItem = {({item}) => {
                return (
                    <View>
                        <Text style={styles.textStyle}>{item.materiais} - Validade {item.age}</Text>
                    </View>
                ) 

            }}
            // element === { item: {materiais: 'Leite'}, index: 0}
            // item === {materiais: 'Leite'}


            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        alignSelf: "center"
    },

    textStyle: {
        marginVertical: 10
    } 

});

export default ListScreen
