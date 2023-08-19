import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Oat = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Oat')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Avena Sativa L',
        )}
        {'\n'}●{' '}
        {t('Origin:- Asia Minor')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Poaceae')}
        {'\n'} ●{' '}
        {t('Oat Chromosome number 2n= 42')}
         {'\n'}●{' '}
        {t('Soil type: Medium textured soils are preferred to sandy soils')}
         {'\n'}●{' '}
        {t('Common varieties: OS-5,OS-6, OL-9, BUNDEL JAI-822')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Teporaca, the best option, Babicora, Menonita, and Karma.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Oat')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Raw Oats Grains Are Used To Feed Livestock, And We Use Processed Oats For Consumption.')}
         {'\n'}●{' '}
        {t(
          'There Are Many Health Benefits Of Oats Like It Helps Us To Control Blood Pressure.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'It Also Provides Many Antioxidants To The Body, Helps In Constipation Conditions, Etc.',
        )}
        {'\n'}●{' '}
        {t(
          'We Can See Many Products Of Oats In The Market Branded As Nutritious Breakfast. Farmers Also Cultivate Oats As A Commercial crop.',
        )}
        </Text>
    </ScrollView>
  );
};