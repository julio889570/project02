import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
        
        <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
      <Image source={{uri:'https://source.unsplash.com/random/200x200?sig=1'}} style={styles.cardImage} />
      
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Place Unknown</Text>
        <Text style={styles.cardLabel}>Unknown </Text>
        <Text style={styles.cardDescription}>
            This an Unknown place that I just took a link from the interent
        </Text>
        <Text style={styles.cardFooter}> @an Unknown place</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
    },
    cardElevated:{
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1, 
        paddingHorizontal: 12, 
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22, 
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription:{
        color: '#487EB0',
        fontSize: 12,
        marginBottom: 45
        
    },
    cardFooter:{
        color: '#000000',
    }
})