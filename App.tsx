/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import GoButton from './src/components/GoButton';
import Input from './src/components/InputText/index';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  let sum = 0;
  let sum2 = 0;
  var newTwo = 0;

  const capture = () => {
    if (age <= 0 || age >= 100 || name === '') {
      console.log('Type a valid name/age');
      Alert.alert('ERROR', 'Type a valid name/age', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
      return;
    } else {
      if (getLength(age) === 1) {
        let newAge = age * 7;
        if (getLength(newAge) === 1) {
          Alert.alert('Hi ' + name, 'Your lucky number is ' + newAge, [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ]);
        } else {
          do {
            var newAgeArray = newAge.toString();
            console.log(newAge);
            for (let i = 0; i < 2; i++) {
              var numArray = newAgeArray[i];
              var num = +numArray;
              sum += num;
            }
            newAge = sum;
            sum = 0;
          } while (newAge > 9);
          Alert.alert('Hi ' + name, 'Your lucky number is ' + newAge, [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ]);
        }
      } else {
        var ageTwoArray = age.toString();
        for (let i = 0; i < 2; i++) {
          var numArray = ageTwoArray[i];
          var num = +numArray;
          sum += num;
        }

        if (getLength(sum) === 2) {
          do {
            var ageTwoArray = sum.toString();
            for (let i = 0; i < 2; i++) {
              var numArray = ageTwoArray[i];
              var num = +numArray;
              sum2 += num;
            }
            newTwo = sum2;
            sum2 = 0;
          } while (newTwo > 9);
          Alert.alert('Hi ' + name, 'Your lucky number is ' + newTwo, [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ]);
        } else {
          Alert.alert('Hi ' + name, 'Your lucky number is ' + sum, [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ]);
        }
        sum = 0;
      }
    }
  };

  //function obtener cantidad digitos
  function getLength(numberDigit: Number) {
    return numberDigit.toString().length;
  }

  return (
    <ScrollView style={styles.Body}>
      <View style={styles.Container}>
        <Text style={styles.Text}>Lucky Number</Text>
        <Image style={styles.Image} source={require('./src/resources/magic.jpg')}
        />
        <View>
          <Input
            onChange={valName => setName(valName)} type="default" placeHolder={'Enter your name'}
          />
          <Input
            onChange={valAge => setAge(valAge)} type="numeric" placeHolder={'Enter your age'}
          />
          <GoButton onClick={capture} />
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
});

export default App;
