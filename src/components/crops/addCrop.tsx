import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import dayjs from 'dayjs';

const AddCrop = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()).format('MMMM DD,  YYYY'));
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <SafeAreaView>
      <View style={styles.dateWrapper}>
        <TextInput value={date + ''} style={styles.date} />
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
            setDate(dayjs(date).format('MMMM DD YYYY'));
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

const styles = StyleSheet.create({
  dateWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  date: {
    color: config.constants.primaryColor,
    borderColor: config.constants.borderColor,
    borderWidth: 0.7,
    padding: 7,
    margin: 10,
    borderRadius: 6,
    width: '80%',
  },
});

export default AddCrop;
