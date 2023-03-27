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

const Crop = ({navigation}: any) => {
  const {crops} = useSelector((state: any) => state.cropReducer);
  const [crop, setCrop] = useState(null);
  // console.log('crrrrrrrrrrpppppppppppppppppppppppp', crop);
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
                    key={idx}
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
        <AddCrop selectedCrop={crop} />
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
