import {View, TextInput, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import config from '../../config';
import Button from '../button';

const FertilizerCalculator = () => {
  const [answer, setAnswer]: any = React.useState(null);
  const [t, i18n] = useTranslation();
  const [area, setArea] = React.useState(0);
  const calculate = () => {
    let Urea = 130.44 * 0.405 * area;
    let DAP = 202.89 * 0.405 * area;
    let MOP = 50 * 0.405 * area;
    setAnswer({Urea, DAP, MOP});
  };
  return (
    <View>
      <Text style={styles.text}>{t('Enter Area in Acre')}</Text>
      <TextInput
        placeholder="Acre"
        style={{...styles.date, width: 100, marginLeft: 25}}
        keyboardType="numeric"
        onChangeText={(e: any) => setArea(e)}
      />
      <Button label="Calculate" onPress={calculate} />
      {answer && (
        <View style={styles.fertilizer}>
          <Text style={styles.date}>
            {t('Urea')} : {answer.Urea} Kg/acre
          </Text>
          <Text style={styles.date}>
            {t('DAP')} : {answer.DAP} Kg/acre
          </Text>
          <Text style={styles.date}>
            {t('MOP')} : {answer.MOP} Kg/acre
          </Text>
        </View>
      )}
    </View>
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
  fertilizer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});
export default FertilizerCalculator;
