import {SafeAreaView, View, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import config from '../../config';

const Ticket = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Home Section</Text>
          <Text style={styles.text}>
            1 : Go to + sign to add a crop you want.
          </Text>
          <Text style={styles.text}>
            2 : Click on pencil icon which is right of + sign to edit/remove the
            crop.
          </Text>
          <Text style={styles.text}>
            3 : Click anywhere in forecast section to see the weather of next 7
            days.
          </Text>
          <Text style={styles.text}>
            4 : Click on Check Health to see the realtime data of soil,
            plant,etc.
          </Text>
          <Text style={styles.text}>
            5 : Click on Bell Icon to see the notifications.
          </Text>
          <Text style={styles.text}>
            6 : Click on Cart Icon to see your cart and add to cart.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Kisan Vedika</Text>
          <Text style={styles.text}>
            1 : Click on pencil icon present on right upper side to ask your
            question.
          </Text>
          <Text style={styles.text}>
            2 : Like, Comment, Share other posts if you want to be.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Settings</Text>
          <Text style={styles.text}>
            1 : Go to Edit Profile to edit your details.
          </Text>
          <Text style={styles.text}>2 : Click on About to see about us.</Text>
          <Text style={styles.text}>3 : Click on Share to Share our App.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: config.constants.primaryColor,
  },
  text: {
    color: '#000',
  },
});

export default Ticket;
