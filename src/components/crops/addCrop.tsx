import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import Button from '../button';

const AddCrop = ({selectedCrop, onSubmit, loading}: any) => {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()).format('MMMM DD  YYYY'));
  const [selectedDate, setSelectedDate]: any = useState(new Date());
  const [area, setArea] = useState(0);

  return (
    <SafeAreaView>
      {loading && (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      )}
      <Image
        style={{
          height: 45,
          width: 45,
          aspectRatio: 1,
          marginHorizontal: 10,
          marginVertical: 10,
          // borderWidth: 1,
          borderColor: config.constants.borderColor,
        }}
        source={{uri: selectedCrop?.image}}
      />
      <Text style={styles.text}>Sowing Date</Text>
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
          date={new Date(selectedDate)}
          maximumDate={new Date()}
          onConfirm={date => {
            setDateOpen(false);
            setDate(dayjs(date).format('MMMM DD YYYY'));
            console.log('dae pickerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', date)
            setSelectedDate(date);
          }}
          onCancel={() => {
            setDateOpen(false);
          }}
        />
      </View>
      <Text style={styles.text}>Area</Text>
      <TextInput
        placeholder="Hectare"
        style={{...styles.date, width: 100, marginLeft: 25}}
        keyboardType="numeric"
        onChangeText={(e: any) => setArea(e)}
      />
      <Button label="Submit" onPress={() => onSubmit(area, selectedDate)} />
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
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AddCrop;
