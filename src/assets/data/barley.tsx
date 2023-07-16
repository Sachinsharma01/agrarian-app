import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Barley = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Barley')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Hordeum Vulgare',
        )}
        {'\n'}●{' '}
        {t('Originated From:- Egypt')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Poaceae')}
        {'\n'} ●{' '}
        {t('Barley Chromosome number 2n= 14')}
         {'\n'}●{' '}
        {t('Soil type: Sandy loam to loamy stand soils of Indo-Gangetic plains having neutral to mild saline reaction and medium fertility')}
         {'\n'}●{' '}
        {t('Common varieties: kailsh , clipper, jyoti, amber , ratna')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Manjula, Azad, Jagriti (U.P.), BH 75 (Haryana), PL 172 (Punjab), Sonu & Dolma (H.P.)',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: Urea @ 55 kg/acre, SSP at 75kg per acre and MOP at 10kg per acre.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Barley Crop')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Mainly Grow Barley For Animal Fodder.')}
         {'\n'}●{' '}
        {t(
          'It Is Also Used To Make Cosmetic Items And Health Products.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Cosmetic Companies Mainly Use The Antioxidant Properties Of Barley To Make Cream And Conditioners.',
        )}
        {'\n'}●{' '}
        {t('We Know Barley For Its Health Benefits Like Weight Loss, Improve Digestion And Many Other Health Benefits.')}
        {'\n'}●{' '}
        {t(
          'Farmers Mainly Grow Barley As The Cash crop.',
        )}
      </Text>
    </ScrollView>
  );
};