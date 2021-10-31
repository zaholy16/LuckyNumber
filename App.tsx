/* eslint-disable prettier/prettier */
import React, {useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoButton from './src/components/GoButton';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  let sum = 0;
  var ageArray = age.toString();

  const capturar = () => {

    if (age <= 0 || age >= 100 || name === '') {
      console.log('Type a valid name/age');
      Alert.alert(
        'ERROR',
        'Type a valid name/age', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ]
      );
      return;
    }
    else {
      if (getLength(age) === 1){
        let newAge = age * 7;
        if (getLength(newAge) === 1){
          Alert.alert(
            'Hi ' + name,
            'Your lucky number is ' + newAge, [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ]
          );
        }
        else {
            do {
              var newAgeArray = newAge.toString();
              console.log(newAge);
                for (let i = 0; i < 2; i++){
                  var numArray = newAgeArray[i];
                  console.log(numArray);
                  var num = +numArray;
                  sum += num;
              }
              newAge = sum;
              sum = 0;
            } while (newAge > 9);
            Alert.alert(
              'Hi ' + name,
              'Your lucky number is ' + newAge, [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ]
            );
          }
      }
      else {
        console.log(age);
        for (let i = 0; i < 2; i++){
          var numArray = ageArray[i];
          console.log(numArray);
          var num = +numArray;
          sum += num;
        }
        if (getLength(sum) === 2){
          var sum2 = 0;
          do {
            var ageTwoArray = sum.toString();
              for (let i = 0; i < 2; i++){
                var numArray = ageTwoArray[i];
                console.log(numArray);
                var num = +numArray;
                sum2 += num;
            }
            sum = sum2;
            sum2 = 0;
          } while (sum2 > 9);
          Alert.alert(
            'Hi ' + name,
            'Your lucky number is ' + sum, [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ]
          );
        }
        else {
          Alert.alert(
            'Hi ' + name,
            'Your lucky number is ' + sum, [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ]
          );
        }
      }
    }
  };

  return (
    <ScrollView style={styles.Body}>
      <View style={styles.Container}>
        <Text style={styles.Text}>Lucky Number</Text>
        <View>
          <Image
            style={styles.Image} source={require('./src/resources/magic.jpg')} />
        </View>
        <View>
          <TextInput
            style={styles.Input}
            placeholder="Enter your name"
            onChangeText={(valName) => setName(valName)}
          />
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
            placeholder="Enter your age"
            onChangeText={(valAge) => setAge(valAge)}
          />
          <GoButton onClick={capturar} />
        </View>
      </View>
    </ScrollView>
  );

  //function obtener cantidad digitos
  function getLength(numberDigit: Number)  {
    return numberDigit.toString().length;
  }

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
    fontSize: 30,
    letterSpacing: 3,
    color: '#000',
  },
  Image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  Input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginTop: 40,
    width: 330,
  },
});

export default App;

