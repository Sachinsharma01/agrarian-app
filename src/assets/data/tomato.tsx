import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Tomato = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Tomato')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Solanum Lycopersicum',
        )}
        {'\n'}●{' '}
        {t('Origin:- South America')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Solanaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 24')}
         {'\n'}●{' '}
        {t('Soil type: well drained sandy or red loam soil rich in organic matter with a pH range go 6 to 7')}
         {'\n'}●{' '}
        {t('Common varieties: Pusa Sadabahar, Pusa Upahar, Arka Shrestha,Arka Vardhan, Arka Vishal, Arka Saurabh, Punjab Chauraha')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Arka rakshak, Arka Gaurav, arka Komal, Arka Vikas',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: for hybrids is 200:150:100 kg of NPK per ha',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Tomato')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The Name Tomato Comes from The Spanish Name (Tomate)')}
         {'\n'}●{' '}
        {t(
          'The Demand for Tomatoes Is Very High All Over the World Because Of Its Exceptional Taste And Farmers Cultivation.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Tomatoes Earn Good Profits Because Of Its High Demand in Asian and European Countries.',
        )}
        {'\n'}●{' '}
        {t('It Is One of The Best Vegetable Cash Crops For Farmers.')}
      </Text>
    </ScrollView>
  );
};