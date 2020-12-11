import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

// REDUCER === Função utilizada para administrar mudançar para um Objeto.

const COLOR_INCREMENT = 5;

const reducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    
    //state === {vermelho: 0, azul: 0, verde: 0 }
    //action === {type: change_vermelho ou change_azul ou change_verde, payload: 5 ou -5}

    switch(action.type){
        case 'change_vermelho':
            //NUNCA FAÇA ISSO!!!
            // state.vermelho = state.vermelho + 5;

            // FAÇA ISSO!!!
            // ...state === copia de state, sem alterar a raiz

            // EXPRESSÃO TERNARIA:
            return state.vermelho + action.payload > 255 || state.vermelho + action.payload < 0 ? state : {...state, vermelho: state.vermelho + action.payload};

            // if(state.vermelho + action.montante > 255 || state.vermelho + action.montante < 0){
            //     return state;
            // }
            // return {...state, vermelho: state.vermelho + action.montante}

        case 'change_azul':

            // EXPRESSÃO TERNÁRIA 
            return state.azul + action.payload > 255 || state.azul + action.payload < 0 ? state : {...state, azul: state.azul + action.payload};

            // if(state.azul + action.montante > 255 || state.azul + action.montante < 0){
            //     return state;
            // }
            // return {...state, azul: state.azul + action.montante}

        case 'change_verde':
            
            // EXPRESSÃO TERNÁRIA
            return state.verde + action.payload > 255 || state.verde + action.payload < 0 ? state : {...state, verde: state.verde + action.payload};

            // if(state.verde + action.montante > 255 || state.verde + action.montante < 0){
            //     return state;
            // }
            // return {...state, verde: state.verde + action.montante}
            
        default:
            return state // significa que nao queremos mudanças
    }
}

const ReducerScreen = () => {

    const [state, runMyReducer] = useReducer(reducer, {vermelho: 0, azul: 0, verde: 0})
    const {vermelho, verde, azul} = state;

    return(
        <View>
            <Text style = {styles.titulo}>Altere as cores!</Text>
            <ColorCounter onIncrease={() => runMyReducer({type: 'change_vermelho', payload: COLOR_INCREMENT })}
                        onDecrease={() => runMyReducer({type: 'change_vermelho', payload: -1 * COLOR_INCREMENT })}
                        color="Vermelho"
                    />
            <ColorCounter onIncrease={() => runMyReducer({type: 'change_verde', payload: COLOR_INCREMENT })} 
                        onDecrease={() =>runMyReducer({type: 'change_verde', payload: -1 * COLOR_INCREMENT }) }
                        color="Verde"
                    />
            <ColorCounter onIncrease={() => runMyReducer({type: 'change_azul', payload: COLOR_INCREMENT })} 
                        onDecrease={() => runMyReducer({type: 'change_azul', payload: -1 * COLOR_INCREMENT })}
                        color="Azul"
                    />
            <Text style={{alignSelf: "center", marginTop: 30, fontSize: 20}}> RGB = {`${vermelho},${verde},${azul}`}</Text>
            <Text numberOfLines={1} style={{marginTop: 20}}>------------------------------------------------------------------------------------------</Text>

            <View style={{height: 100, width: 100, backgroundColor:`rgb(${vermelho},${verde},${azul})`, alignSelf: "center", marginTop: 20 }}></View>
        </View>
    )

}


const styles = StyleSheet.create({

    titulo: {
        fontSize: 30,
        alignSelf:'center',
        margin: 10
    }

});

export default ReducerScreen;