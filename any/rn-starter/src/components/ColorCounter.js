import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';


const ColorCounter = ({color}) => {

    return(
        <View>

            <Text style = {styles.cor}>{color}</Text>

        </View>
    )

}
    

const styles = StyleSheet.create({

    cor: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 0,
        marginTop: 20 
    }

});

export default ColorCounter;