import { StyleSheet, Text, View, Linking, Image} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function onpenWebsite(wesiteLink: string){
           Linking.openURL(wesiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21
            </Text>

        </View>
        <Image
        source={{
            uri:'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Dignissim suspendisse in est ante. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{},
    bodyContainer:{}
})