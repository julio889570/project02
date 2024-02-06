import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevetedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Eleveted Card</Text>
      <ScrollView style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      container:{},
      card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4, 
        margin: 8
      },
      cardElevated: {}
})