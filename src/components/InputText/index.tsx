/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardType, StyleSheet, TextInput} from 'react-native';

interface Props {
  onChange: (valName: any, valAge: any) => void,
  type: KeyboardType,
  placeHolder: string,
}

const Component = (props: Props) => {
    const {onChange, type, placeHolder} = props;
  return (
    <TextInput
        style={styles.Input}
        onChangeText={onChange}
        keyboardType={type}
        placeholder={placeHolder} />
  );
};

const styles = StyleSheet.create({
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

export default Component;
