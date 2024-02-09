import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
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
            uri:'https://images.pexels.com/photos/19986476/pexels-photo-19986476/free-photo-of-a-window-with-red-shutters-on-a-stone-wall.jpeg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Dignissim suspendisse in est ante. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. </Text>
            
        </View>
        <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={()=> onpenWebsite('https://roadmap.sh/') }
                >
                    <Text style={styles.socialLink}>Read more</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> onpenWebsite('https://www.facebook.com/julio.adon/') }
                >
                    <Text style={styles.socialLink}>follow me on fb</Text>
                </TouchableOpacity>
        
        
        </View>
      
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 5
    },
    card: {
        width: 350,
        height: 370,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard:{
        backgroundColor: '#e07c24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    }
      
    ,
    cardImage:{
        height: 200
        
    },
    bodyContainer:{
        padding: 10,
    },
    footerContainer:{
     padding: 8, 
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-evenly'

    },
    socialLink: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 6,
        borderRadius: 6

    }
})