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
          'Suitable soil and weather conditions are the most important factors for the cultivation of chillies.',
        )}
        {'\n'}●{' '}
        {t('The chilli grows in all soils from light sandy to heavy clay.')}{' '}
        {'\n'}●{' '}
        {t(
          'Light soils are good for an early crop, while clay loam and silt loam soils are well suited for heavy yields .',
        )}{' '}
        {'\n'}●{' '}{t('Ph range')} :- 6.5-7.5{'\n'} ●{' '}
        {t('If the acidic soil is acidic , liming is required.')} {'\n'}●{' '}
        {t('Sufficient water availability')} {'\n'}●{' '}
        {t('Removing crop residues.')} {'\n'}●{' '}
        {t(
          'Removal of stubbles if any in field planned to cultivate chilli crop.',
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
        ● {t('The chilli is a warm saeason crop.')} {'\n'}●{' '}
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
          'Manjira, sarangi, Teja , Yeshaswini, Demon, Arunim , wonder hot,sitaragold , indica, krithi , goli, Nongwoo, Jewelry, Fito gauri',
        )}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Nursery Raising')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Nursery soil nare treated with tricoderma viridae Or pseudomonas culture 5-6 Days before sowing',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'For 1m2 of nursery area apply 5kg well rotten FYM, DAP @ 50g, and also apply CALDAN @ 2.5g',
        )}{' '}
        {'\n'}●
        {t(
          'Dimensions of raised bed is 125-150 cm width and length according to use.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Depth of seed is 0.5cm and covered with topsoil and spacing between two lines is 2-2.5 cm',
        )}
        {'\n'} ●{' '}
        {t(
          'After sowing the seeds, mulch with green leaves and irrigate with rose cane daily in the morning.',
        )}
        {'\n'} ●
        {t(
          'Cover the nursery bed with nylon net to prevent damage by insect and also prevent with climatic effect.',
        )}{' '}
        {'\n'}●{' '}
        {t('Remove the mulch immediately after germination of the seeds.')}
        {'\n'} ●{' '}
        {t('Weeding should be taken up if weed are present in the nursery.')}{' '}
        {'\n'}● {t('Saplings will be ready to plant in 5-6 weeks.')}
        {'\n'} ●{' '}
        {t(
          'Restrict irrigation one week before transplanting and irrigate heavily on the previous day of transplantinmg to harden the seedlings.',
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
          'A well decomposed FYM @ 12-15 tnns should be mixed with biofertilizers @5kg, Tricoderma @2kg , Pseudomonas @2kg and mixing biofertilizers.',
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
        {'\n'} ●{t(' DAP @ 100Kg')}
        {'\n'} ● {t('MOP@ 50Kg')}
        {'\n'} ● {t('Micronutrient mixture @ 10Kg')}
        {'\n'} ● {t('Magnesium Sulphate@50Kg')}
        {'\n'} ● {t('Root growth promoters@10Kg')}
        {'\n'} ●{t('Furadon @ 5Kg')}
        {'\n'} ● {t('Neem cake @ 250gm.')}
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
        .
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Plant Protection in nursery')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'The seedlings growth in the nursery should be monitotred for pest and disease.',
        )}
        {'\n'} ●{' '}
        {t(
          'Application of basal dose of fertilizers and prepare field ready to transplant.',
        )}
        {'\n'} ●{' '}
        {t(
          'Apply basal fertilization during field preparation just after before forming ridges / furrows or fund formation.',
        )}
        {'\n'}●{' '}
        {t(
          'Formation of ridges / furrows in flood irrigation method bunds with suitable spacing and setting up the drip.',
        )}
        {'\n'} ●{' '}
        {t(
          'Laying of mulch and making hokles to transplant with required spacing in drip irrigation method.',
        )}
        {'\n'} ● {t('Irrigate to keep the soil moist enough to transplant.')}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Hardening the seedlings')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Seedlings are hardened by exposing by exposing to an outer tougher enviroonment to make the seedlings grow studier.',
        )}
        {'\n'} ●{' '}
        {t(
          'The study plants will be strong enough to tolerate the transplanting shock.',
        )}
        {'\n'} ●{' '}
        {t(
          'The seedlings raised on the seed bed nursery the hardening may be done by removing the nylon mesh.',
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
        {t('TRANSPLANTING')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{t('The age of 35-45 days old seedlings are suitable to transplant.')}
        {'\n'}●{' '}
        {t(
          'Seedlings are uprooted and transplanted within an hours after uprooting.',
        )}
        {'\n'} ●{' '}
        {t(
          'The roots of the seedlings are dipped in fungicides and pesticides to prevent any attack of fungal disease and insect attack.',
        )}
        {'\n'} ● {t('Transplanting is usually done in the evening hours.')}
        {'\n'} ●
        {t('Transplanting tools may also be used for plantimg the seedlings.')}{' '}
        {'\n'}●
        {t(
          'Spacing depends on the varities and ranges 1 -1.5 feet from the plant to [plant and 2-2.5 feet in between rows.',
        )}
        {'\n'} ●{' '}
        {t(
          'Irrigation should be provided immediately to protect the transplants from moisture stress.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Weeding')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t('Manual weeding may be done if required with the small implements.')}
        {'\n'} ●{' '}
        {t('Chemical control By using post emergent herbicides like Agil @2ml/l water may be spread.')}
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
        {t('Manual weeding may be done if required with the small implements.')}
        {'\n'} ●{' '}
        {t('Chemical control By using post emergent herbicides like Agil @2ml/l water may be spread.')}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Fertilization')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ● {t('2nd dose application of nutrients.')}
        {'\n'} ●{' '}
        {t(
          'Calcium nitrate 25kg +25 kg of urea fortified with general liquid may be applied to soil and covered with soil.',
        )}{' '}
        {'\n'}● {t('Urea @25Kg/ha.')}
        {'\n'} ● {t('Magnesium sulphate @ 25kg/ha')}
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
      <Text style={{color: '#000', textAlign: 'justify'}}>
        {t(
          'Harvesting of the chillies is usually made accordingly to the use. For preparation of chilli powder and dry chilli the chilli fruits need to be dark red and the fruits are harvested when they turn dark red. The green chilli is harvested for the culinary and even to prepare the pickles. Normally the green chilli may be harvested 8-10 times in a chilli crop and red chillies are harvested 5-6 times.',
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
        {t('INSECTS, PEST AND DISEASES OF PLANT.')}
      </Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
        {t('Collar rot fungus (Capsicum annuum L)')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        {t('Observe for the following symptoms.')}
        {'\n'} 1){' '}
        {t(
          'The collar or the place just above the root zone may be subsoil or above the soil parts initially show water-soaked spot, later which develops in to bigger brownish black dead tissue.',
        )}
        {'\n'} 2){' '}
        {t(
          'On progress of the disease, rotting of the collar region occurs and the plant may resist standing up right and may fall off.',
        )}
        {'\n'} 3){' '}
        {t(
          'Collar or crown rot leads to the rotting with brownish or blackish spots at the point of infection on the collar or foot of the plant.',
        )}
        {'\n'} 4){' '}
        {t(
          'The discoloration of the foot or stem may progress on all directions upward, downward or around the stem and once the whole stem is invaded by the pathogen the plants slowly start to wilt or fall off.',
        )}
        {'\n'} 5){' '}
        {t(
          'The leaves of the respective plants turn yellow to brown and fall off in some of the plants.',
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
        1){' '}
        {t(
          'Collar rottening and Root rotting pathogens require favourable conditions to invade and develop the symptoms.',
        )}
         2){' '}
        {t(
          'Presence of disease-causing pathogens in the seed bed or soil due to poor land preparations cause collar rot.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Steps to prevent the damage.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        1){' '}
        {t(
          'Soil sanitization, exposure of the soil to the sunlight after multiple and deep ploughings.',
        )}
        {'\n'} 2){' '}
        {t(
          'Sanitization helps in killing of any kind of fungi present in the soil before sowing or transplanting.',
        )}
        {'\n'} 3){' '}
        {t(
          'Application of hyper parasitic organisms like Trichoderm viride, Trichoderm harzianum, Pseudomonas fluorescens, Bacillus subtilis, etc to the soil along with well decomposed farm yard manure which can kill these pathogenic organisms like PYTHIUM, FUSARIUM, ALTERNARIA, RHIZOCTONIA, SCLEROTINIA, PHYTOPTHERA, etc.',
        )}
        {'\n'} 4){' '}
        {t(
          'Taking care of the contamination of growth media, use of the pathogen or disease-free compost, sanitized implements to prepare the nursery bed, raising seedlings [Protrays, seeders, nets etc] intercultural activities like weeders and other small implements.',
        )}
        {'\n'} 5){' '}
        {t(
          'Prepare the seed beds with proper drainage, where the seeds will be sown.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Damping off Fungus (Pythium aphanidermatum)')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        {t('Observe for the following symptoms.')}
        {'\n'} 1){' '}
        {t(
          'Seeds may germinate but seedlings may not sprout out of the soil and it is generally called as pre-emergence damping-off.',
        )}
        {'\n'} 2){' '}
        {t(
          'Whereas in case of post emergent damping off the sprouted plants wilt or suddenly die.',
        )}
        {'\n'} 3){' '}
        {t(
          'We can observe poor growth of the sprouts with abnormal sized leaves.',
        )}
        {'\n'} 4)
        {t('Water soaked spots appear on leaves.')}
        {'\n'} 5){' '}
        {t(
          'We can observe soft and thin discolored stem which turn black, shrivel and appear like wire stem.',
        )}
        {'\n'}6){' '}
        {t(
          'Young plants turn colour from green to grey, finally black and later wilt, die.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Main reasons for the problem.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        1){' '}
        {t(
          'Damping off disease causing pathogens require favourable conditions to invade and develop the symptoms.',
        )}
        {/* {'\n'} 2){' '}
        {
          'Over dosage of fertilisers provided in the soil make more prone to attack of collar rot.'
        }
        {'\n'} 3)
        {
          'Poor drainage with excess of water in the seed bed will leads to attack to collar rot.'
        } */}
        {'\n'} 3){' '}
        {t(
          'Presence of disease-causing pathogens in the seed bed or soil due to poor land preparations cause damping off.',
        )}
        {'\n'} 4){' '}
        {t(
          'Poor quality seeds may be untreated, poorly treated or expired seeds have more chances of getting killed.',
        )}
        {'\n'} 5){' '}
        {t(
          'Use of contaminated implements to remove weeds and take up intercultural operations in seed bed and in the fields.',
        )}
        {'\n'} 6){' '}
        {t(
          'Poor weed management in the seed beds which may harbour the diseases which leads to damping off.',
        )}
        {'\n'} 7)
        {t('Improper conditions for seeds to germinate.')}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Steps to prevent the damage.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        1){' '}
        {t(
          'Soil sanitization, exposure of the soil to the sunlight after multiple and deep ploughings.',
        )}
        {'\n'} 2){' '}
        {t(
          'Sanitization helps in killing of any kind of fungi present in the soil before sowing or transplanting.',
        )}
        {'\n'} 3){' '}
        {t(
          'Application of hyper parasitic organisms like Trichoderm viride, Trichoderm harzianum, Pseudomonas fluorescens, Bacillus subtilis, etc to the soil along with well decomposed farm yard manure which can kill these pathogenic organisms like PYTHIUM, FUSARIUM, ALTERNARIA, RHIZOCTONIA, SCLEROTINIA, PHYTOPTHERA, etc.',
        )}
        {'\n'} 4){' '}
        {t(
          'Taking care of the contamination of growth media, use of the pathogen or disease-free compost, sanitized implements to prepare the nursery bed, raising seedlings [Protrays, seeders, nets etc] intercultural activities like weeders and other small implements.',
        )}
        {'\n'} 5){' '}
        {t(
          'Prepare the seed beds with proper drainage, where the seeds will be sown.',
        )}
        {'\n'} 6){' '}
        {t(
          'Provide proper drainage in main field to avoid water logging where seedlings will be transplanted to avoid the damping off disease in young transplants.',
        )}
        .
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Powdery mildew , fungus (Leveillula taurica)')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        {t('Observe for the following symptoms.')}
        {'\n'} 1){' '}
        {t(
          'The symptoms appear primarily on foliage as light green to bright yellow lesions on the upper surface of leaf.',
        )}
        {'\n'} 2) {t('The spots enlarge and become necrotic tissues.')}
        {'\n'} 3) {t('Lesions may be seen on underside of leaves.')}
        {'\n'} 4)
        {t(
          'Under favourable conditions, dense whitish powdery fungal growth appear on the underside of leaves, causing mild distortions.',
        )}
        {'\n'} 5){' '}
        {t(
          'Later the fungal growth spread on upper side of the leaves also ultimately the entire leaves will wither and die, but they remain attached to the stem.',
        )}
        {'\n'}
        6){' '}
        {t(
          'The symptoms will not appear on fruits or stems, but loss of foliage leads to sunscald.',
        )}
        {'\n'} 7){' '}
        {t(
          'Loss of foliage reduces the rate of photosynthesis ultimately which reduces the yield by 50% and quality of the fruits also will be affected.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Main reasons for the problem.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        1){' '}
        {t(
          'The growth of the fungus is favoured by low light, with high humidity and moderate temperature.',
        )}
        {'\n'} 2){' '}
        {t(
          'Greenhouses provide an ideal moist, temperature conditions for rapid spread of the disease.',
        )}
        {'\n'} 3) {t('The pathogen even remains in weeds or crop hosts.')}
        {'\n'} 4){' '}
        {t(
          'Old and stressed plants are more susceptible than healthy young plants.',
        )}
        {'\n'}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Steps to prevent the damage.')}
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        1){' '}
        {t(
          'Avoid overcrowding of seedlings in the nursery, and check each for infection before field planting.',
        )}
        {'\n'}. 2) {t('Control the weed host plants regularly.')}
        {'\n'} 3){' '}
        {t(
          'Provide proper aeration and light penetration with proper plant spacing without over-crowding.',
        )}
        {'\n'} 4){' '}
        {t(
          'Do not apply excessive amounts of nitrogen fertilizer because abundant leafy growth promotes favourable condition for disease development.',
        )}
        {'\n'} 5){' '}
        {t(
          'Ensure plants with adequate amounts of water as moisture stress may increase susceptibility.',
        )}
        {'\n'} 6) {t('Improve ventilation by proper pruning and staking.')}
        {'\n'} 7) {t('Collect all the trash and burn or bury it.')}
        {'\n'} 8)
        {t(
          'Avoid over-lapping crops to prevent spores from older crops infecting newer ones at an early age.',
        )}
        {'\n'} 9){' '}
        {t(
          'Practice crop rotation, choosing a non-host crop, e.g., root crops or those in the cabbage family.',
        )}
        {'\n'} 10) {t('Use resistant varieties.')}
      </Text>
    </ScrollView>
  );
};
