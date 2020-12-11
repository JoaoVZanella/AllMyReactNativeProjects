import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NUMBER = 1

const reducer = (state, action) => {

    console.log(state.counter);

    switch(action.type){
        case 'change_increment':
            return {...state, counter: state.counter + action.payload}
        case 'change_decrement':
            return {...state, counter: state.counter + action.payload}
        default:
            return state;

    }

}

const CounterScreen = () => {
                                                        // state
    const [state, runMyReducer] = useReducer(reducer, {counter: 0});
    const {counter} = state;

    //const [counter, SetCounter] = useState(0);
    //SetCounter === Função que detecta quando alguma mudança na variavel é executada, react nao detecta magicamente.
    return(
        <View>                                                      
                                                                           {/*AQUI É A ACTION*/}
            <Button title="Adicionar" onPress={() => runMyReducer({type: 'change_increment', payload: NUMBER })}></Button>
            <Button title="Reduzir" onPress={() => runMyReducer({type: 'change_decrement', payload: -1 * NUMBER})}></Button>
            <Text style={{alignSelf: "center", marginTop: 200, fontSize: 30}}> Contador: {counter}</Text>
        </View>
    )
}


const styles = StyleSheet.create({


});

export default CounterScreen;