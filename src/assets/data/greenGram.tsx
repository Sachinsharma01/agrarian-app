import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const greenGram = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Green Gram')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Vigna Radiata',
        )}
        {'\n'}●{' '}
        {t('Origin:- India')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Fabaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 22')}
         {'\n'}●{' '}
        {t('Soil type: sandy loam to black cotton soil.')}
        {'\n'}●{' '}
        {t('Very sensitive to water logging conditions.')} 
         {'\n'}●{' '}
        {t('Common varieties: Khargone 1, Krishna 11, Jawahar 45, Kopergaon, Mohini (S-8), PS 16, Pant Moong 3, Pusa 105.')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: CO1, ADT1, JGG1.CO2, VBN4, CO8',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 35: 50:00 kg/h',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Green Gram')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Green Gram Is a Very Important Pulse Crop.')}
         {'\n'}●{' '}
        {t(
          'It Is Very Rich in Nutrients and Antioxidants.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Moong Bean Is Good for Heart Health and Brain Health.',
        )}
        {'\n'}●{' '}
        {t('Green Gram Also Helps Us to Lose Weight')}
      </Text>
    </ScrollView>
  );
};