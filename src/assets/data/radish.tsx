import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Radish = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Radish')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Raphanus Raphanistrum Subsp. Sativus',
        )}
        {'\n'}●{' '}
        {t('Originated From:- China')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Brassicaceae')}
        {'\n'} ●{' '}
        {t('Radish Chromosome number 2n= 18')}
         {'\n'}●{' '}
        {t('Soil type: Any well-drained, slightly acidic to neutral soil with pH 6to 7')}
         {'\n'}●{' '}
        {t('Common varieties: pusa desi, pusa reshmi, Punjab safed, nadamuni')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: pusa desi , pusa chetki, Japanese white, arka nishant',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 10-10-10 fertilizer per 100 square feet',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Radish')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The 41st Crop In The Rabi Crop List Is Radish.')}
         {'\n'}●{' '}
        {t(
          'It Is Cooked All Over The World',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'It Contains Many Antioxidants And Minerals Like Calcium And Potassium.',
        )}
        {'\n'}●{' '}
        {t('Radish Is Consumed Raw And Cooked.'
        )}
        {'\n'}●{' '}
        {t('It Increases Liver Function.'
        )}
        {'\n'}●{' '}
        {t('It Also Reduces The Debates Risk.'
        )}
        {'\n'}●{' '}
        {t('Radish Is Easily Available In The Market And Consumed All Over The World.'
        )}
      </Text>
    </ScrollView>
  );
};