import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {db} from '../../firebase';
import {onValue, ref} from 'firebase/database';
import {getNPKData} from '../../request';
import config from '../../config';

const SoilHealth = ({navigation}: any) => {
  const {t} = useTranslation();
  const [soil, setSoil]: any = useState({});
  const [loading, setLoading] = useState(false);
  const [npkData, setNpkData] = useState({N: 'NA', P: 'NA', K: 'NA'});
  useEffect(() => {
    setLoading(true);
    getSoilData();
    getNPKData().then((data: any) => {
      setLoading(false);
      setNpkData(data);
    });
  }, []);
  function getSoilData() {
    let getRef = ref(db, 'Mod1');
    onValue(getRef, (snapshot: any) => {
      console.log('firebase data', snapshot.val());
      setSoil(snapshot.val());
      // setLoading(false);
    });
  }
  return (
    <SafeAreaView>
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
            {t('Back')}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.soilCompositionContiner}>
          <View>
            <Text style={styles.soilCompositionText}>
              {t('Soil Composition')}
            </Text>
            <View>
              <Text style={styles.soilCompositionData}>
                Nitrogen (N) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {npkData?.N} %
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Phosphorus (P) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {npkData?.P} %
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Potassium (K) :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {npkData?.K} %
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                pH :{' '}
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.S_PH?.PH}
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Humidity :
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.ATH?.HUM} g/m³
                </Text>
              </Text>
              <Text style={styles.soilCompositionData}>
                Temperature :
                <Text style={{color: config.constants.primaryColor}}>
                  {soil?.ATH?.TEMP} &deg;C
                </Text>
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <View>
              <Text style={styles.soilCompositionText}>
                {t('Farm Location')}
              </Text>
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
              <Text style={styles.soilCompositionText}>{t('Alerts')} </Text>
              <Text style={{color: '#000'}}>
                {t('Currently you do not have any alerts.')}{' '}
              </Text>
            </View>
          </View>
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

export default React.memo(SoilHealth);
