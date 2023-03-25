import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';

const AddCrop = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(moment(new Date()).format('MMMM Do YYYY'));
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}>
        <TextInput
          value={date + ''}
          style={{
            color: config.constants.primaryColor,
            borderColor: config.constants.borderColor,
            borderWidth: 0.7,
            padding: 7,
            margin: 10,
            borderRadius: 6,
            width: '80%',
          }}
        />
        <TouchableOpacity onPress={() => setDateOpen(true)}>
          <Ionicons
            name="ios-calendar"
            color={config.constants.primaryColor}
            size={30}
          />
        </TouchableOpacity>
        <DatePicker
          modal
          open={dateOpen}
          date={selectedDate}
          maximumDate={new Date()}
          onConfirm={date => {
            setDateOpen(false);
            setDate(moment(date).format('MMMM Do YYYY'));
            setSelectedDate(date);
          }}
          onCancel={() => {
            setDateOpen(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCrop;
