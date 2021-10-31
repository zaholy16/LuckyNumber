/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onClick: () => void
}

const Component = (props: Props) => {
    const {onClick} = props;
  return (
    <TouchableOpacity
        style={styles.Button}
        onPress={onClick}>
        <Text style={styles.ButtonText}>Press me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Component;
