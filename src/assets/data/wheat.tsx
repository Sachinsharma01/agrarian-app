import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Wheat = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Wheat')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Triticum Aestivum',
        )}
        {'\n'}●{' '}
        {t('Origin:- Turkey')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Poaceae')}
        {'\n'} ●{' '}
        {t('Wheat Chromosome number 2n= 42')}
         {'\n'}●{' '}
        {t('Soil type: clay loam or loam texture, good structure and moderate water holding capacity')}
         {'\n'}●{' '}
        {t('Common varieties: HD2967,UP262, PBW 343, HD3385,JABAL')} 
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: Himgiri',
        )}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: NPK@ 120:60:40',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Wheat')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Use Wheat Flour All Over The World In Different Ways.')}
         {'\n'}●{' '}
        {t(
          'It is Used To Make Bread , Biscuits, Noodles, Cake , Pastries And Many Products.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'We Know Wheat As The Best Source Of Iron, Calcium, And Vitamins.',
        )}
        {'\n'}●{' '}
        {t(
          'Wheat Is Consumed In Different Ways.',
        )}
        {'\n'}●{' '}
        {t(
          'They Make Many Products From Wheat Most Common Selling Products Are Wheat Flour, Wheat Bread, Wheat Pasta, Etc.',
        )}
        {'\n'}●{' '}
        {t('Farmers Also Cultivated Wheat As A Cash Crop.')}
        </Text>
    </ScrollView>
  );
};