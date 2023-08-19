import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Potato = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Potato')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Solanum Tuberosum L',
        )}
        {'\n'}●{' '}
        {t('Origin:- Southern Peru')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Solanaceae')}
        {'\n'} ●{' '}
        {t('Potato Chromosome number 2n= 48')}
         {'\n'}●{' '}
        {t('Soil type: Loamy and sandy loam soils, rich in organic matter with good drainage with pH range of 5.2- 6.4')}
         {'\n'}●{' '}
        {t('Common varieties: Kufri sindhuri, kufri Lalima, kufri chipsona1, kufri chipsona2')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: setanta, Nicola, cara , Porvenir',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 120kg N, 115 kg P2 O5 , and 120 K2O kg per hectare.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Potato')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Potato Is A Very Delicious Vegetable, Can Be Consumed By Everyone')}
         {'\n'}●{' '}
        {t(
          'We Can Mix All The Vegetables Given In This Rabi Crops Example With Potato And Cook',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'It Will Increase The Taste And Nutrition Value Of The Food',
        )}
        {'\n'}●{' '}
        {t('Potatoes Are Cultivated All Over The World By The Farmers Because Of Its Good Demand In The Market.')}
      </Text>
    </ScrollView>
  );
};