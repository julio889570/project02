import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevetedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Eleveted Card</Text>
      <ScrollView horizontal={true}>
        
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>see</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Text>Right</Text>
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
      container:{
        padding: 8,
        flexDirection: 'row'
        
      },
      card: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8
      },
      cardElevated: {
        backgroundColor: '#cad5e2',
        elevation: 4
      }
})