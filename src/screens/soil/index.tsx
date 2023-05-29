import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import { db } from '../../firebase';
import {onValue, ref} from 'firebase/database';

import config from '../../config';

const SoilHealth = () => {
  const [soil, setSoil]: any = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getSoilData();
  }, []);
   function getSoilData() {
     let getRef = ref(db, 'Mod1');
     onValue(getRef, (snapshot: any) => {
       console.log('firebase data', snapshot.val());
       setSoil(snapshot.val());
       setLoading(false);
     });
   }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.soilCompositionContiner}>
          <View>
            <Text style={styles.soilCompositionText}>Soil Composition</Text>
            <View>
              <Text style={styles.soilCompositionData}>
                Nitrogen (N) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.nitrogen}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Phosphorus (P) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.phosphorus}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Potassium (K) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.potassium}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                pH :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.S_PH?.PH}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Humidity :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.ATH?.HUM}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Temperature :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.ATH?.TEMP}
                </Text>
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <View>
              <Text style={styles.soilCompositionText}>Farm Location</Text>
              <View style={styles.soilCompositionData}>
                <Text style={styles.soilCompositionData}>
                  Altitude :{' '}
                  <Text style={{color: config.constants.primaryColor}}>
                    {soil?.LOCATION?.ALT}
                  </Text>
                </Text>
                <Text style={styles.soilCompositionData}>
                  Latitude :{' '}
                  <Text style={{color: config.constants.primaryColor}}>
                    {soil?.LOCATION?.LAT}
                  </Text>
                </Text>
                <Text style={styles.soilCompositionData}>
                  Longitude :{' '}
                  <Text style={{color: config.constants.primaryColor}}>
                    {soil?.LOCATION?.LON}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <View>
              <Text style={styles.soilCompositionText}>Alerts </Text>
              <Text style={{color: '#000'}}>Currently you do not have any alerts. </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  soilCompositionText: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomColor: config.constants.borderColor,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  soilCompositionContiner: {
    marginTop: 10,
    marginHorizontal: '7%',
  },
  soilCompositionData: {
    marginVertical: 5,
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});

export default SoilHealth;
