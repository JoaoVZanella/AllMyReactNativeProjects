import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ImageDetails= (props) => {
    console.log(props)

    return (
        <View>    
            <Image source={props.file}/>

            <Text> {props.title}</Text>
            <Text> Pontos da imagem - {props.file}</Text>
        </View>

    )
}


const styles = StyleSheet.create({

});

export default ImageDetails;