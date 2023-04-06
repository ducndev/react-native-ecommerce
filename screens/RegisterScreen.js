import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterHeader from '../components/register/RegisterHeader'
import RegisterSocial from '../components/register/RegisterSocial'
import RegisterForm from '../components/register/RegisterForm'
import RegisterFooter from '../components/register/RegisterFooter'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider } from 'react-native-elements/dist/divider/Divider'
const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.registerScreenContainer}>
      <RegisterHeader navigation={navigation}/>
      <Divider />
      <RegisterForm />
      <RegisterSocial />
      <RegisterFooter navigation={navigation} />
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  registerScreenContainer: {
    flex: 1,
    position: 'relative'
  }
})