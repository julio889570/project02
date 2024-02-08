import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCard from './components/ElevetedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      
      <ElevetedCard />
      <FancyCard />
      <ActionCard /> 
      </ScrollView>
    </SafeAreaView>
  )
}