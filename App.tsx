/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './src/components/InputText/index';
import capture from './src/action/capture';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const onClick = () => {
    capture(name, age);
  };

  return (
    <ScrollView style={styles.Body}>
      <View style={styles.Container}>
        <Text style={styles.Text}>Lucky Number</Text>
        <Image style={styles.Image} source={require('./src/resources/magic.jpg')} />
        <View>
          <Input onChange={valName => setName(valName)} type="default" placeHolder={'Enter your name'} />
          <Input onChange={valAge => setAge(valAge)} type="numeric" placeHolder={'Enter your age'} />
          <TouchableOpacity style={styles.Button} onPress={onClick}>
            <Text style={styles.ButtonText}>Press me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Body: {
    backgroundColor: '#DBD4EC',
  },
  Container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
  Text: {
    marginTop: 50,
    padding: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginBottom: 10,
    borderColor: '#260D55',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: 3,
    color: '#4818A2',
  },
  Image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  Button: {
    backgroundColor: '#8069B4',
    width: 330,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  ButtonText: {
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
      fontWeight: '500',
  },
});

export default App;
