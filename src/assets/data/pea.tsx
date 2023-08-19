import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Pea = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270, marginLeft: '2%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Pea')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Pisum Sativum L',
        )}
        {'\n'}●{' '}
        {t('Origin:- Palestine Or Egypt')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Fabaceae')}
        {'\n'} ●{' '}
        {t('Pea Chromosome number 2n= 14')}
         {'\n'}●{' '}
        {t('Soil type: sandy to heavy clay, are good for peas as long as you have well-drained soil. Peas grow best in soil with a pH between 6 and 7.5.')}
         {'\n'}●{' '}
        {t('Common varieties: birsa matar-1, ANUP, Brahmi,Alaska early')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Bharti, vijay, pragati, sadabahar, sweta,uday',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: 20: 60:40 kg NPK/ha.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Pea')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Pea Is Very Popular Used All Over The World')}
         {'\n'}●{' '}
        {t(
          'The Pea Is Available In The Market Easily In Season.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'After The Season It Is Available In Canned, Frozen, And Dried Peas.',
        )}
        {'\n'}●{' '}
        {t('It Is Cultivated All Over The World In The Rabi Season.')}
      </Text>
    </ScrollView>
  );
};