import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tickets} from '../../data';
import config from '../../config';
import {height} from '../../utils/getDimensions';

const HelpAndSupport = ({navigation}: any) => {
  const getColor = (status: string) => {
    switch (status) {
      case 'Open':
        return '#f1c40f';
      case 'Closed':
        return '#e74c3c';
      case 'Pending':
        return '#3498db';
      default:
        return '#000';
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="#fff"
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>
            Back
          </Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#fff', height: height - 70}}>
        <View style={styles.container}>
          {tickets.map((ticket, index) => {
            return (
              <TouchableOpacity key={index} style={styles.ticket}>
                <View style={styles.innerTicket}>
                  <View>
                    <Text style={styles.ticketTitle}>{ticket.title}</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.details}>
                    <View style={styles.holder}>
                      <Text style={{color: '#d1cdcd', fontSize: 12}}>
                        Ticket No :{' '}
                      </Text>
                      <Text style={styles.ticketNo}>{ticket.ticketNo}</Text>
                    </View>
                    <View style={styles.holder}>
                      <Text style={{color: '#d1cdcd'}}>Status : </Text>
                      <Text
                        style={{
                          color: getColor(ticket?.status as string),
                        }}>
                        {ticket.status}
                      </Text>
                    </View>
                    <View style={styles.holder}>
                      <Text style={{color: '#d1cdcd', fontSize: 12}}>
                        Date :{' '}
                      </Text>
                      <Text
                        style={{
                          color: config.constants.primaryColor,
                          fontSize: 12,
                        }}>
                        {ticket.date}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
  container: {
    marginHorizontal: '5%',
  },
  ticket: {
    marginVertical: 5,
    hadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 7
  },
  innerTicket: {
    marginLeft: 10,
    marginBottom: 5,
  },
  ticketDate: {
    color: '#000',
  },
  ticketTitle: {
    // textAlign: 'left',
    marginTop: 7,
    color: config.constants.primaryColor,
  },
  holder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginTop: 7,
    marginBottom: 7,

  },
  ticketNo: {
    color: config.constants.primaryColor,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default HelpAndSupport;
