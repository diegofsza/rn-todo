import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function Empty() {
  return <Text style={styles.text}>No items here</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#bbb',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
});
