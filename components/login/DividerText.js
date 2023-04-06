import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DividerText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>HOẶC</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: -30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray'
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'gray'
  }
});

export default DividerText;
