import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCard from './components/ElevetedCard'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevetedCard />
      </ScrollView>
    </SafeAreaView>
  )
}