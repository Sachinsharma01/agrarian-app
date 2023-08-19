import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const pigeonPea = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Pigeon Pea')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Cajanus Cajan',
        )}
        {'\n'}●{' '}
        {t('Origin:- India')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Fabaceae')}
        {'\n'} ●{' '}
        {t('Pigeon Pea Chromosome number 2n= 22')}
         {'\n'}●{' '}
        {t('Soil type: black cotton soils, well drained with a pH ranging from 7.0-8.5.')}
         {'\n'}●{' '}
        {t('Common varieties: DRG59, manak , Pusa - 885, Asha, Sharad (DA11), Narendra Arhar1, Bahar')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: VL Arhar - 1, Vipula, JKM - 189, G.T. - 101, Pusa 991, Azad (K - 91 - 25), PPH - 4, ICPH - 8, IPH 09 - 5, ICPH - 2740',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 25-30kgN,40-50kgP2O5,30kgK 2 O per ha area as Basal dose at the time of sowing.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Pigeon Pea')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Commonly Know Pigeon Pea As Red Gram')}
         {'\n'}●{' '}
        {t(
          'The Maximum Area Of red gram cultivation is in India And Africa',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Farmers Cultivate Red Gram For The Green Manuring, Which Can Fix Atmospheric Nitrogen In The Soil.',
        )}
        </Text>
    </ScrollView>
  );
};