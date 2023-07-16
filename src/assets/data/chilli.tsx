import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Chilli = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Chilli')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Capsicum Annum Var. Glabriusculum',
        )}
        {'\n'}●{' '}
        {t('Origin:- Mexico')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Solanaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 24')}
         {'\n'}●{' '}
        {t('Soil type: sandy loam, clay loam soil with 5.5 to 7')}
         {'\n'}●{' '}
        {t('Common varieties: Arka Meghna, green Jwala, Kashmiri, Teja')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Pusa sadabahar, Pant C-1',
        )}
        {'\n'}●{' '}
        {t(
          'NPK requirement: 24 Kg Nitrogen, 24 Kg P2O5 and 12Kg K2O per acre',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Chilli')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Chilli Is Very Popular All Over the World Because Of Its Taste.')}
         {'\n'}●{' '}
        {t(
          'They Cultivate Chili All Over the World.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'The Demand for Chili Is Very High All Over the World.',
        )}
        {'\n'}●{' '}
        {t('Farmers Cultivate Chili to Gain High Profits.')}
        {'\n'}●{' '}
        {t('We Know it as The Cash Crop.')}
        {'\n'}●{' '}
        {t('Chilli Promotes Weight Loss.')}
        {'\n'}●{' '}
        {t('It Helps the Human Body to Fight Cancer.')}
        {'\n'}●{' '}
        {t('We Also Use It as Natural Pain Relief.')}
        {'\n'}●{' '}
        {t('It Is Good for Fighting Various Types of Infection')}

      </Text>
    </ScrollView>
  );
};