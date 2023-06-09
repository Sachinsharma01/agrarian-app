import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import config from '../../config';
import AddCrop from '../../components/crops/addCrop';
import {addCrop} from '../../request';

const Crop = ({navigation}: any) => {
  const {crops} = useSelector((state: any) => state.cropReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [crop, setCrop]: any = useState(null);
  const [loading, setLoading] = useState(false)
  const onAddCropSubmitHandler = async (area:any, sowingDate: any) => {
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
    setLoading(false)
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      {!crop ? (
        <>
          <Text style={styles.text}>Choose the Crop</Text>
          <ScrollView>
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
                    key={idx + "i"}
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
          </ScrollView>
        </>
      ) : (
        <AddCrop loading={loading} onSubmit={onAddCropSubmitHandler} selectedCrop={crop} />
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
});

export default Crop;
