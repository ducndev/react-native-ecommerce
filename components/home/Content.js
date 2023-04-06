import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from './Slider'
import Advertisements from './Advertisements'
import TodaySuggestion from './TodaySuggestion'

const Content = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Slider />
      <Advertisements />
      <TodaySuggestion />
    </ScrollView>
  )
}

export default Content

const styles = StyleSheet.create({})