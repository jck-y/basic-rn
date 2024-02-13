import { View,Text,StyleSheet } from "react-native";
import React from 'react';

const Title = () => {
    return(
        <Text style={style.welcome}>Welcome</Text>
    )
}
const style = StyleSheet.create({
    welcome: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
      },
    });
export default Title;