/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  onChange: () => void;
}

const Component = (props: Props) => {
    const {onChange} = props;
  return (
    <TextInput
        style={styles.Input}
        keyboardType="numeric"
        placeholder="Enter your age"
        onChangeText={(onChange)} />
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
