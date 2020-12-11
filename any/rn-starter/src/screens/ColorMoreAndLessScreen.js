import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 5;

const ColorMoreAndLess = () => {

    const [vermelho, SetVermelho] = useState(0);
    const [verde, SetVerde] = useState(0);
    const [azul, SetAzul] = useState(0);

    console.log(vermelho, verde, azul);

    const setColor = (color, change) => {

        console.log(color, change);

        switch(color){
            case "Vermelho":
                // vermelho + change > 255 || vermelho + change < 0 ? null : SetVermelho(vermelho+change) ;
                // return;
                if(vermelho + change > 255 || vermelho + change < 0){
                    return;
                } else {
                    SetVermelho(vermelho+ change);
                }
                return;
            case "Verde":
                // verde + change > 255 || verde + change < 0 ? null : SetVerde(verde + change);
                // return;
                if(verde + change > 255 || verde + change < 0) {
                    return;
                } else {
                    SetVerde(verde + change);
                }
                return;
            case "Azul":
                // azul + change > 255 || azul + change < 0 ? null : SetAzul(azul+change);
                // return;
                if(azul + change > 255 || azul + change < 0){
                    return;
                } else {
                    SetAzul(azul + change); 
                }
            }
    }

    return(
        <View>
            <Text style = {styles.titulo}>Altere as cores!</Text>
            <ColorCounter onIncrease={() => setColor('Vermelho', COLOR_INCREMENT )}
                        onDecrease={() => setColor('Vermelho', -1 * COLOR_INCREMENT)}
                        color="Vermelho"
                    />
            <ColorCounter onIncrease={() => setColor("Verde", COLOR_INCREMENT)} 
                        onDecrease={() => setColor("Verde", -1 * COLOR_INCREMENT)}
                        color="Verde"
                    />
            <ColorCounter onIncrease={() => setColor("Azul", COLOR_INCREMENT)} 
                        onDecrease={() => setColor("Azul", -1 * COLOR_INCREMENT)}
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

export default ColorMoreAndLess;