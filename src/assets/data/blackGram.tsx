import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const blackGram = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Black Gram')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Vigna Mungo',
        )}
        {'\n'}●{' '}
        {t('Origin:- South Asia')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Fabaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 22')}
         {'\n'}●{' '}
        {t('Soil type: well-drained soil with pH of 6.5 to 7.8')}
         {'\n'}●{' '}
        {t('Common varieties: Pant urd 31, Basant bahar, Vishwas, Mash479')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: VBN 9, VBN 10PDU1',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 20:40:20 NPK kg/ha along with 20 kg S/ha',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Black Gram')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Don’t Get Confused Between a Black Gram and Mung Bean as These Two Are Totally Different.')}
         {'\n'}●{' '}
        {t(
          'There Are Many Names for The Black Gram, Urad Bean, Mash Kalai, Uzhunnu Parippu, Ulundu Paruppu, Minapa Pappu, Uddu (In Kannada) Or Black Matpe.',
        )}
      </Text>
    </ScrollView>
  );
};