import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Cauliflower = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Cauliflower')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Brassica Oleracea Var. Botrytis',
        )}
        {'\n'}●{' '}
        {t('Originated From:- Island')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Brassicaceae')}
        {'\n'} ●{' '}
        {t('Cauliflower Chromosome number 2n= 18')}
         {'\n'}●{' '}
        {t('Soil type: well-drained yet moisture-retentive, fertile soil with pH of 6 to 7')}
         {'\n'}●{' '}
         {t('Early Kunwari.')}
         {'\n'}●{' '}
         {t('Pusa Early Synthetic.')}
         {'\n'}●{' '}
         {t('Pant Gobhi 3.')}
         {'\n'}●{' '}
         {t('Pusa Deepali.')}
         {'\n'}●{' '}
         {t('Pant Gobhi 2')}
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: usa Synthetic, Pant Shubhra, Punjab Giant-26, Punjab Giant-35',
        )}
        {'\n'}●{' '}
        {t('Pusa Snowball-1, Pusa Snowball-2, Sonwball-16, Dania Kalimpong.')}
        {'\n'}●{' '}
        {t(
          'Nutrient requirement: Apply FYM @250- 300q/ha, Nitrogen @100-150kg/ha, Phosphorus @ 60- 80kg/ha and Potassium @ 80kg/ha',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Cauliflower')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('We Know Cauliflower For Its Fibre and B Vitamins')}
         {'\n'}●{' '}
        {t(
          'It Is Very Helpful In Digestion-Related Problems And It Has Many Other Health Benefits.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'It Is A Delicious Vegetable Consumed All Over The World.',
        )}
      </Text>
    </ScrollView>
  );
};