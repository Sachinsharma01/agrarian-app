import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Lentil = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Lentil')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Lens Culinaris',
        )}
        {'\n'}●{' '}
        {t('Origin:- Egypt')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Fabaceae')}
        {'\n'} ●{' '}
        {t('Lentil Chromosome number 2n= 14')}
         {'\n'}●{' '}
        {t('Soil type: Well drained, loam soils with neutral reaction are best for lentil cultivation')}
         {'\n'}●{' '}
        {t('Common varieties: Narendra masoor 1, grima , JL1')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: RVL-31, IPL81 (Noori), IPL -316, IPL-406, WBL-77, Pant L-6, Pant L-7',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 20kg N, 40kg P, 20 kg K and 20kg S/ha.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Lentil')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Lentil Is Consumed All Over The World As A Pulse.')}
         {'\n'}●{' '}
        {t(
          'It Is Cultivated All Over The World, Mainly In Europe And Asia.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Lentil Is Very Rich In Fibre And Carbohydrate',
        )}
        {'\n'}●{' '}
        {t('We Found Very Less Amount Of Fat Content It Lobia')}
        {'\n'}●{' '}
        {t(
          'One More Health Benefit Of Lobia Is Its Gluten-Free Property.',
        )}
        {'\n'}●{' '}
        {t(
          'In the Market There Are Many Types Of Products Made From Lentil Like Lentil Chips, Lentil Soup, Roasted Lentil.',
        )}
      </Text>
    </ScrollView>
  );
};