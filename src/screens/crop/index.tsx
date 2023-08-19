import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import AddCrop from '../../components/crops/addCrop';
import {addCrop} from '../../request';

const Crop = ({navigation}: any) => {
  const [t] = useTranslation();
  const {crops} = useSelector((state: any) => state.cropReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [crop, setCrop]: any = useState(null);
  const [loading, setLoading] = useState(false);
  const onAddCropSubmitHandler = async (area: any, sowingDate: any) => {
    setLoading(true);
    let payload = {
      userId: user._id,
      crop: {
        name: crop?.name,
        image: crop?.image,
        _id: crop?._id,
        totalWeeks: crop?.totalWeeks,
      },
      sowingDate: sowingDate,
      area: area || 0,
    };
    const cropAdded = await addCrop(payload, token as string);
    setLoading(false);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
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
            {t('Crop')}
          </Text>
        </View>
      </View>
      <>
        <Text style={styles.text}>{t('Choose the Crop')}</Text>
      </>
      {!crop ? (
        <ScrollView>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            {crops?.map((crop: any, idx: number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCrop({
                      ...crop,
                    });
                  }}
                  key={idx}
                  style={{height: 100, width: 100, marginRight: 10}}>
                  <Image
                    key={idx + 'i'}
                    style={{
                      height: 70,
                      width: 70,
                      aspectRatio: 1,
                      marginHorizontal: 10,
                    }}
                    source={{uri: crop?.image}}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <AddCrop
          loading={loading}
          onSubmit={onAddCropSubmitHandler}
          selectedCrop={crop}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: config.constants.primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
});

export default Crop;
