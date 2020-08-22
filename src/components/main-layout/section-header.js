import {StyleSheet, Text} from 'react-native';
import React from 'react';

export function SectionHeader(props) {
  const {title} = props;
  return <Text style={styles.sectionHeader}>{title}</Text>;
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    marginVertical: 20,
  },
});
