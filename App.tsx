import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Download from './assets/Bawah.png';

const App = () => {
  return (
    <ScrollView style={style.body}>
      <Text style={style.welcome}>WELCOME</Text>

      <TextInput
        style={style.inputcollumn}
        placeholder="     Username"
        placeholderTextColor="white"
      />
      <TextInput
        style={style.inputcollumn}
        placeholder="     Password"
        placeholderTextColor="white"
        secureTextEntry
      />
      <View style={style.btnlog}>
        <Button title="Login" color="transparent" />
      </View>
      <Image style={style.img1} source={Download}/>
      <Image style={style.img1} source={Download}/>
      <Image style={style.img1} source={Download}/>
      <Image style={style.img1} source={Download}/>
      <Text style={style.welcome}>ke atas</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: '#1E192f',
  },
  img1: {
    paddingTop: 130,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  inputcollumn: {
    borderColor: 'white',
    borderWidth: 1,
    margin: 40,
    borderRadius: 10,
  },
  btnlog: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    lineHeight: 200,
    fontFamily: 'Helvetica Neue',
  },
});
export default App;
