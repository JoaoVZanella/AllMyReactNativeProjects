import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [color, SetColor] = useState([]);

    return(
        <View>
            <Button title="Adicionar Cor" onPress={() => SetColor([...color, ColorsRandom()])}></Button>

            <FlatList
            keyExtractor={(item) => item}
            data={color}
            renderItem={({item}) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
            }}
            />
        </View>
    )
}

const ColorsRandom = () => {

    const vermelho = Math.floor(Math.random() * 255); // RGB percorre de 0 ate 255 tipos de cores
    const verde = Math.floor(Math.random() * 255);
    const azul = Math.floor(Math.random() * 255);

    return(
        `rgb(${vermelho}, ${verde}, ${azul})`
    );
}

const styles = StyleSheet.create({


});

export default ColorScreen;