import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = '!@#$%¨&*()_-+{}^?.,/º/;|\abcdefghijklmnoplrstuvxyzQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890';

export default function App() {

  const [password, setPassword] = useState('');
  const [text, setText] = useState('')
  const [size, setSize] = useState(15)

  function generatePass (){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    setText('Copiado! Agora cola nesse campo para testar.')
  }

  return (
    <View style={styles.container}>
      <Image />


      <Text style={styles.title}>{size} caracteres</Text>


      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor)=> setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}

      {text !== '' && (
        <>
          <Text style={styles.copy}>{text}</Text>

          <TextInput
            style={{width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15, paddingLeft: 16}}
          />
        </>
      )}

     
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  copy: {
    fontSize: 16,
    fontWeight: '700'
  },
  area: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,

  },
  button: {
    backgroundColor: '#783454',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
});
