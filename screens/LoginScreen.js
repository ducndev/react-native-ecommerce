import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginHeader from '../components/login/LoginHeader'
import LoginFooter from '../components/login/LoginFooter'
import LoginSocial from '../components/login/LoginSocial'
import LoginForm from '../components/login/LoginForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider } from 'react-native-elements/dist/divider/Divider'
const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <LoginHeader navigation={navigation}/>
      <Divider />
      <LoginForm />
      <LoginSocial />
      <LoginFooter navigation={navigation} />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    position: 'relative'
  }
})