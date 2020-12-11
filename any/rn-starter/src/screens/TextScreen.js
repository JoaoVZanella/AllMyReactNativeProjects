import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    const [state, setState] = useState("");

    return(
        <View>
            <Text style={style.titulo}>Tela de Texto</Text>

            <TextInput style = {style.input} 
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                //autoCompleteType={false}
                value={state}
                onChangeText = {(novoValor) =>
                {
                    setState(novoValor)
                    
                }}
            />

            <Text style={{alignSelf: "center"}}>Você digitou:</Text>
            <Text style={{alignSelf: "center"}}>{state}</Text>
            {state.length < 5 ? <Text style = {{color: "red", alignSelf: "center", fontSize: 20, marginTop: 30}}>Informe uma senha mais de 5 caracteres</Text> : <Text style = {{color: "green", alignSelf: "center", fontSize: 20, marginTop: 30}}>Sucesso!.</Text>}
        </View>
    )
};

const style = StyleSheet.create({

    titulo: {
        fontSize: 40,
        alignSelf: "center"
    },

    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,

    }
})

export default TextScreen;