import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Paddy = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Paddy')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Oryza Sativa (Asian Rice)',
        )}
        {'\n'}●{' '}
        {t('Origin:- South-Central China')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Pinaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 24')}
         {'\n'}●{' '}
        {t('Soil type: clay or clay loam soil')}
         {'\n'}●{' '}
        {t('Common varieties: Bengal Dashi, J-34 S/g or D/r, LRA, H-4, MECH-1, Shanker-6, Bunny, MCU-5(30-31-32-33-MM), DCH-32')} 
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: N: P: K @ 50: 12: 12 kg/acre',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Rice')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Rice Is One of The Common Crops Cultivated All Over the World in Large Quantities.')}
         {'\n'}●{' '}
        {t(
          'The Popularity of Rice Can’t Be Expressed in Words because 95% Of the People All Over the World Consume Rice as A Stable Food.',
        )}
        {'\n'}●{' '}
        {t(
          'There Are Many Health Benefits of The Rice Like It Is Very Easy to Digest And Improve The Digestive System.',
        )}
        {'\n'}●{' '}
        {t(
          'It’s Very Rich in Carbohydrate and Proteins.',
        )}

      </Text>
    </ScrollView>
  );
};