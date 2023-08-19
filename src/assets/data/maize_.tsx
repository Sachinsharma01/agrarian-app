import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const Maize = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('Maize')}
      </Text>
      
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Botanical Name:- Zea Mays',
        )}
        {'\n'}●{' '}
        {t('Origin:- Central America and Mexico')}{' '}
        {'\n'}●{' '}
        {t(
          'Kingdom:- Plantae',
        )}{' '}
        {'\n'}●{' '}{t('Family:- Poaceae')}
        {'\n'} ●{' '}
        {t('Chromosome number 2n= 20')}
         {'\n'}●{' '}
        {t('Soil type: sandy to clay loam soil')}
         </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Common Varieties')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Ambrosia Hybrid Corn')}
         {'\n'}●{' '}
        {t(
          'Jubilee Hybrid Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Honey Select Hybrid Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Golden Bantam Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Peaches and Cream Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Nirvana Hybrid Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Silver Queen Hybrid Corn',
        )}
        {'\n'}●{' '}
        {t(
          'Tolerance varieties: DHM-107 DHM-109, Longe 4, longe 5',
        )}
        {'\n'}●{' '}
        {t(
          'NPK requirement: 135: 62.5: 50 NPK kg per hectare, ZnSO4 37.5 kg per hectare',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('About Maize')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Maize Is One of The Most Important Cereal Crops Which Is Called a Miracle Crop.')}
         {'\n'}●{' '}
        {t(
          'It Has Different Types Like Field Maize (To Feed Livestock), Popcorn, Sweet Corn, Baby Corn, Indian Corn.',
        )}
        {'\n'}●{' '}
        {t(
          'We Know Maize As (Queen of Cereals).',
        )}
        {'\n'}●{' '}
        {t(
          'Maize Has Many Industrial Uses in Making Starch, Corn Flour, Corn Syrup.',
        )}
        {'\n'}●{' '}
        {t(
          'We Also Use It in The Paper and Textile Industry.',
        )}
        {'\n'}●{' '}
        {t(
          'Corn Is Rich in Vitamin-C.',
        )}
        {'\n'}●{' '}
        {t(
          'It Is Good for Cancer and Heart Diseases.',
        )}
        {'\n'}●{' '}
        {t(
          'It Is Important for The Farmers Because It Comes in the list of cash crops.',
        )}

      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('100g Of Maize Contain Nutrients Like: -')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Calories: - 86 Cal')}
         {'\n'}●{' '}
        {t(
          'Total Fat: - 1.18g',
        )}
        {'\n'}●{' '}
        {t(
          'Carbohydrate: - 19.02g',
        )}
        {'\n'}●{' '}
        {t(
          'Protein: - 3.22g',
        )}
        
      </Text>
    </ScrollView>
  );
};