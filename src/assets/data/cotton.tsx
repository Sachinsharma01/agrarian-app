import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Cotton = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Cotton')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Gossypium',
        )}
        {'\n'}●{' '}
        {t('Origin:- America, Africa, Egypt and India')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Malvaceous')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 26')}
         {'\n'}●{' '}
        {t('Soil type: laterite soil')}
         {'\n'}●{' '}
        {t('Common varieties: Bengal Dashi, J-34 S/g or D/r, LRA, H-4, MECH-1, Shanker-6, Bunny, MCU-5(30-31-32-33-MM), DCH-32')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Ankur 555, Bayer7172, US51, BAYER7272, KAVERI BULLET',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 50 kg N,30 kg P,and 35 Kg of K per acre',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Cotton')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('It is One Of the Best Natural Fibers.')}
         {'\n'}●{' '}
        {t(
          'The Demand for Cotton Is Increasing Day by Day.',
        )}
        {'\n'}●{' '}
        {t(
          'It Is Also One of The Best Commercial Crops.',
        )}
        {'\n'}●{' '}
        {t(
          'Farming Of Cotton Started In 6.000 BC.',
        )}
        {'\n'}●{' '}
        {t(
          'The Best Thing for The Cotton is that it Soaks Up To 24-27 Of Its Own Weight in Water.',
        )}

      </Text>
    </ScrollView>
  );
};