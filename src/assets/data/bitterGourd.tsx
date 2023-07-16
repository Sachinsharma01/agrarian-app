import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const BitterGourd = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Bitter Gourd')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Momordica Charantia',
        )}
        {'\n'}●{' '}
        {t('Origin:- Indo-Burma')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Cucurbitaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 22')}
         {'\n'}●{' '}
        {t('Soil type: well drained sandy to sandy loam soil rich in organic matter')}
         {'\n'}●{' '}
        {t('Common varieties: Priya,Preeti, CO1')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Pusa Vishesh, Pusa Do Mausami, Pusa Hybrid 1 Arka Harit',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: Apply 10 kg of FYM per pit (20 t/ha) 100g of NPK 6:12:12/pit as basal and 10 g of N/pit 30 days after sowing.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Bitter Gourd')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Commonly Know Bitter Gourd as Bitter Melon.')}
         {'\n'}●{' '}
        {t(
          'This Vegetable Is Rich in Antioxidants, Flavonoids And Other Polyphenol Compounds.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'There Are Many Varieties of Bitter Gourd.',
        )}
        {'\n'}●{' '}
        {t('These Are White-Fruited Types of Bitter Melon, Green-Fruited Types of Bitter Melon, Tubercled Types, Long-Fruited Types, And Spindle-Shaped Types.')}
      </Text>
    </ScrollView>
  );
};