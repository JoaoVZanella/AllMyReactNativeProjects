import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.titleStyle}>Image Screen</Text>
            <ImageDetails title="Floresta" file={require("../../assets/forest.jpg")} scoreImage={2}/>
            <ImageDetails title="Praia"  file={require("../../assets/beach.jpg")} scoreImage={2} />
            <ImageDetails title="Montanha"  file={require("../../assets/mountain.jpg")} scoreImage={2}/>
        </View>

    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        alignSelf: "center"
    },
});

export default ImageScreen;