import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const CropDataNursery = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('How To Nursery Raising')}
      </Text>
      <Text>{t('Site selection & initial land preparation')}</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 8,
        }}>
        {t('Take instructions:-')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Suitable soil and weather conditions are the most important factors for the cultivation of Maize.',
        )}
        {'\n'}●{' '}
        {t('The Maize grows in all soils from light sandy to heavy clay.')}{' '}
        {'\n'}●{' '}
        {t(
          'Light soils are good for an early crop, while clay loam and silt loam soils are well suited for heavy yields .',
        )}{' '}
        {'\n'}●{' '}{t('Ph range')} :- 5.8-6.0{'\n'} ●{' '}
        {t('If the acidic soil is acidic , liming is required.')} {'\n'}●{' '}
        {t('Sufficient water availability')} {'\n'}●{' '}
        {t('Removing crop residues.')} {'\n'}●{' '}
        {t(
          'Removal of stubbles if any in field planned to cultivate maize crop.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Weather conditions')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ● {t('Maize is a warm saeason crop.')} {'\n'}●{' '}
        {t(
          'The crop does well under an average monthly temperature of 20 to 25 C.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Long dry spell and heavy rainfall also affect on growth and fruiting of plant',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Choosing the various type varieties and Seed rate')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        • {t('Varieties')}:-{' '}
        {t(
          'MAS 09P, MERAJ, GANGA SAFED2, AMBER , SONA',
        )}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Procurement of Farm Yard Manure')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        •{' '}
        {t(
          'A well decomposed FYM @ 10 tonnes /ha should be mixed with biofertilizers @5kg, Trichoderma @2kg , Pseudomonas @2kg and mixing biofertilizers.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Farm Yard Manure application')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ● {t('Apply FYM fortified with biofertilizers for main fields.')}
        {'\n'} ●{t('Rotavating or cultivating to mix the FYM and soil.')}
        {'\n'} ● {t('FYM helps soil conditions')}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Procurement of fertilizers quantity per acre.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Application of fertilizers at the time of final field preparation (as basal dose)',
        )}
        {'\n'} ●{t(' DAP @ 52Kg')}
        {'\n'} ● {t('MOP@ 20Kg')}
        {'\n'} ● {t('Micronutrient mixture @ 12.5Kg')}
        {'\n'} ● {t('Zinc Sulphate@25Kg')}
        {'\n'} ● {t('Root growth promoters@10Kg')}
        {'\n'} ● {t('Phosphorus solubilizing bacteria @3Kg')}
        {'\n'} ●{t('Azotobacter @ 3Kg')}
        {'\n'} ● {t('Neem cake @ 3-5 kg.')}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t(
          'Procurement Of Drip Irrigation materials and mulch paper if required',
        )}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ● {t('Water conservation and pest management technologies.')}
        {'\n'}●{' '}
        {t(
          'Regions with water sparse and integrated cultivation techniques to conserve water drip irrigation technology are adapted by the farmers.',
        )}
      </Text>
      
    </ScrollView>
  );
};


export const CropDataTransPlanting = () => {
    const [t, i18n] = useTranslation();
    return (
      <ScrollView
        style={{height: height - 270}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {t('SOWING')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Seed - Sowing')} :-
        </Text>

        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{t('8kg /acre for hybrid seed and 10kg/acre for composite seed.')}
          {'\n'}●{' '}
          {t(
            'Spacing-60cm *20 cm.',
          )}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Weeding')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}
          {t('Manual weeding may be done if required with the small implements.')}
          {'\n'} ●{' '}
          {t('Chemical control By using pre-emergence of Atrazine @400-800 gram/acre.')}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 7,
          }}>
          {t('VEGETATIVE GROWTH , FLOWERING')}
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}
          {t('Weeding Manual weeding may be done if required with the small implements.')}
          {'\n'} ●{' '}
          {t('Chemical control By using post emergent herbicides like Alachlor@ 450g /acre.')}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Fertilization')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}{t('2nd dose application of nutrients.')}
          {'\n'} ●{' '}
          {t(
            'Calcium nitrate 10kg + 25 kg /acre of urea fortified with general liquid may be applied to soil and covered with soil.',
          )}{' '}
          {'\n'}●{' '}{t('Urea @85Kg/ha.')}
          {'\n'} ●{' '}{t('Magnesium sulphate @ 40kg/ha')}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 7,
          }}>
          {t('Harvesting')}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 7,
          }}>
          {t('Task Instructions')} :-
        </Text>

        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t(
            'Harvesting of the maize is usually made according to the use. Harvesting of maize matures within 90-110 days. Plants may remain green when the cobs are dry and ready to harvest . Therefore , do not wait for stalks to dry up for harvesting , this is desirable as such plants can be used as fodder.',
          )}
        </Text>
      </ScrollView>
    );
  };



  export const CropDataTransNurseryDamage = () => {
    const [t, i18n] = useTranslation();
    return (
      <ScrollView
        style={{height: height - 270}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {t('INSECTS, PEST AND DISEASES OF PLANT')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Downy Mildew : Peranosclerospora sorghi')}
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Observe for the following symptoms.')}
          {'\n'}●{' '}
          {t(
            'Systemic infection as chlorosis which appears 10-14 days.',
          )}
           {'\n'}●{' '}
          {t(
            'Leaves tend to be narrower and more erect.',
          )}
           {'\n'}●{' '}
          {t(
            'Plants infected early usually die four weeks after infection.',
          )}
           {'\n'}●{' '}
          {t(
            'Chlorosis is noticeable on the lower half of the leaf : Half-leaf symptom.',
          )}
           {'\n'}●{' '}
          {t(
            'Chlorosis gradually covers the entire leaf surface at later stage.',
          )}
          {'\n'}●{' '}
          {t(
            'A white downy growth is seen on the lower leaf surface under humid warm conditions.',
          )}
          {'\n'}●{' '}
          {t(
            'Systemically infected plants do not form cob and if it forms they are small and poorly filled.',
          )}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Main reasons for the problem')}
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
          {t(
            'Downy mildew is caused by several species of the fungus Sclerospora and is of serious concern in maize-producing areas in several countries of the region.',
          )}
           {'\n'}●{' '}
          {t(
            'Symptom expression is greatly affected by plant age, pathogen species, and prevailing environmental factors.',
          )}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Steps to prevent the damage')}
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
          {t(
            'Long crop rotation with crops that are not the natural host of the fungus.',
          )}
          {'\n'}●{' '}
          {t(
            'Irrigate the crops at the time of earhead emergence to maturity.',
          )}
          {'\n'}●{' '}
          {t(
            'Treat the seeds with Carbendazim or Captan at 2 g/kg.',
          )}
          {'\n'}●{' '}
          {t(
            'Grow disease tolerant varieties viz., SN-65, SWS-8029, Diva and Zenit.',
          )}
        </Text>
      </ScrollView>
    );
  };
  


