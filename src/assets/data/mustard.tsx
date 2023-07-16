import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Mustard = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Mustard')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Brassica Nigra {Black Mustard}',
        )}
        {'\n'}●{' '}
        {t('Originated From:- Spain')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Brassicaceae')}
        {'\n'} ●{' '}
        {t('Mustard Chromosome number 2n= 18')}
         {'\n'}●{' '}
        {t('Soil type: Sandy loam to clay loam soils')}
         {'\n'}●{' '}
        {t('Common varieties: pusa bold , Prakash, Shekhar, seeta')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: CS52, CS54, NRCDR2',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 60-90kg nitrogen, 60 kg P2O5 and 40 kg K2O per hectare',
        )}
        {'\n'}●{' '}
        {t(
          'Sulphur is also added.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Mustard')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Mustard Is The Primary Source Of Kitchen Oil.')}
         {'\n'}●{' '}
        {t(
          'Mustard Oil Is The Most Used Vegetable Kitchen Oil All Over The World.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'We Also Use It In Different Health-Related Issues Like To Control Inflammatory Used In The Common Cold, Used For Painful Joints And Muscles (Rheumatism), And Also Used To Treat Arthritis.',
        )}
        {'\n'}●{' '}
        {t(
          'Mustard Soup, Mustard Chutney, Mustard Powder.',
        )}
        {'\n'}●{' '}
        {t(
          'There Are Many Other Products That Are Made From Mustard.',
        )}
        </Text>
    </ScrollView>
  );
};