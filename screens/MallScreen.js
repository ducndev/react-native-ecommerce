import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/home/Footer'
const MallScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mallContainer}>
      <Text>MallScreen</Text>
      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mallContainer: {
    flex: 1,
  }
})

export default MallScreen