import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height, width} from '../../utils/getDimensions';

export const Brinjal = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Brinjal')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Solanum Melongena',
        )}
        {'\n'}●{' '}
        {t('Origin:- Indo-Burma')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Solanaceae')}
        {'\n'}●{' '}
        {t('Chromosome number 2n= 24')}
         {'\n'}●{' '}
        {t('Soil type: loose friable, well drained silt loam or clay loam soils rich in organic matter')}
         {'\n'}●{' '}
        {t('Common varieties: pusa purple long, Pusa Kranti, Pusa Barsati')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Arka Shirish, Pusa Krati, Arka Sheel',
        )}
        {'\n'}●{' '}
        {t(
          'NPK requirement: for varieties is 100:50:50 kg NPK/ha and for hybrids it is 200:75:75 kg NPK/ha.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Brinjal')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Commonly Know Brinjal as An Eggplant.')}
         {'\n'}●{' '}
        {t(
          'We Cultivate Brinjal All Over the World.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Because Of Its Meaty Texture and Health Benefits, It Is Very Popular All Over the World.',
        )}
        {'\n'}●{' '}
        {t('Brinjal Is Very Rich in Antioxidants and Helps Us to Control Our Weight And It Is Best for Heart Health.')}
        {'\n'}●{' '}
        {t('In Many Research, They Have Also Known Brinjal as Anti-Cancerous.')}

      </Text>
    </ScrollView>
  );
};