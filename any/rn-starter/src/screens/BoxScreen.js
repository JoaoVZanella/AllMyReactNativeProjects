import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Margin
// Border
// Padding
// Content

const BoxScreen = () => {
    return(
        // <View style={style.viewStyle}>  
        //     <Text style={style.textStyleUm}>Child #1</Text>
        //     <Text style={style.textStyleDois}>Child #2</Text>
        //     <Text style={style.textStyleTres}>Child #3</Text>

            
        // </View>

        <View style={style.view}>
            <Text style={style.title} >App </Text>
            <View style={style.square1}></View>
            <View style={style.square2}></View>
            <View style={style.square3}></View>
        </View>
    )

}

const style = StyleSheet.create({
    // viewStyle: {
    //     margin:0,
    //     borderWidth: 5,
    //     borderRadius: 10,
    //     borderColor: 'black',
    //     alignItems: 'center',
    //     //flexDirection: 'column',
    //     //justifyContent: 'stretch',
    //     height: 200,
    // },

    // textStyleUm: {
    //     borderWidth:3,  
    //     borderColor: 'red',
    //     textAlign: 'center',
    //     //flex: 4
    // },
    // textStyleDois: {
    //     borderWidth:3,  
    //     borderColor: 'red',
    //     alignSelf: 'stretch',
    //     textAlign: 'center',
    //     // position: 'absolute',
    //     // top: 0,
    //     // left: 0,
    //     // bottom: 0,
    //     // right: 0, 

    //     ...StyleSheet.absoluteFillObject
    // },
    // textStyleTres: {
    //     borderWidth:3,  
    //     borderColor: 'red',
    //     top: 20,
    //     textAlign: 'center',        
    // },

    title: {
        borderWidth:3,  
        borderColor: 'black',
        textAlign: 'center',
        flexDirection:'row',
        fontSize: 30,
        top: 5,
        height: 70,
        alignSelf: 'stretch',
    },

    view: {
    },

    square1: {
        height: 100, width: 100, backgroundColor: '#90ee90',
        alignSelf: "flex-start"
    },
    square2: {
        height: 100, width: 100, backgroundColor: '#90ebee',
        alignSelf: "flex-end",
        bottom: 100
    },
    square3: {
        height: 100, width: 100, backgroundColor: '#f2b1ad',
        alignSelf: 'center',
        bottom: 100,
        }
});

export default BoxScreen;