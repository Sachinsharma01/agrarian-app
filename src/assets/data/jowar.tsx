import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Jowar = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Jowar')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Sorghum Bicolor',
        )}
        {'\n'}●{' '}
        {t('Origin:- India and Africa')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Poaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 20')}
         {'\n'}●{' '}
        {t('Soil type: alluvial soil or mixed black soil and red soil')}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 40:20: 0 Kg of NPK fertilizer per hectare',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Jowar')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Jowar is one of the important cereal crops.')}
         {'\n'}●{' '}
        {t(
          "It's a staple food for poor people.",
        )}{' '}
        {'\n'}●{' '}
        {t(
          'We also use it as a fodder crop to feed livestock.',
        )}
        {'\n'}●{' '}
        {t('Farmers grow Jowar in both seasons which are rabi and kharif crops.')}
        {'\n'}●{' '}
        {t('It helps in improving our digestion as it’s rich in fiber content.')}
        {'\n'}●{' '}
        {t('Jowar has also got industrial use in making gunny bags.')}
        {'\n'}●{' '}
        {t('We also use it for making alcohol.')}
        <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('100g Of Jowar Contain Nutrients Like:-')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Calories: - 349 Cal')}
         {'\n'}●{' '}
        {t(
          'Protein: - 10.4 Gram',
        )}
        {'\n'}●{' '}
        {t(
          'Carbs: - 72.6 Gram',
        )}
        {'\n'}●{' '}
        {t(
          'Fats: - 1.9 Gram',
        )}
        {'\n'}●{' '}
        {t(
          'Fiber: - 9.7 Gram',
        )}
        
      </Text>

      </Text>
    </ScrollView>
  );
};