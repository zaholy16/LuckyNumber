/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';

const capture = (name: string, age: number) => {

  let sum = 0;
  let sum2 = 0;
  var newTwo = 0;

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

export default capture;
