import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {height} from '../../utils/getDimensions';

export const RiceCropDataNursery = () => {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {t('How To Nursery Raising')}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 8,
        }}>
        {t('Take instructions:-')}
      </Text>
      <Text
        style={{
            fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 8,
        }}>
            {t('Wet Nursery')}
        </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Select 20 cents (800 m2) of land area near to water source for raising seedlings for one hectare.',
        )}
        {'\n'}●{' '}
        {t('Treat the seeds in Carbendazim or Pyroquilon or Tricyclozole solution at 2 g/l of water for 1 kg of seeds. Soak the seeds in water for 10 hrs and drain excess water.')}{' '}
        {'\n'}●{' '}
        {t(
          'This wet seed treatment gives protection to the seedlings up to 40 days from seedling disease such as blast and this method is better than dry seed treatment.'
        )}{' '}
        {'\n'}● {' '}{t('If the seeds are required for sowing immediately, keep the soaked seed in gunny in dark and cover with extra gunnies and leave for 24hrs for sprouting.')}{'\n'} ●{' '}
        {t('Seed treatment with Pseudomonas fluorescens: Treat the seeds with talc based formulation of Pseudomonas fluorescens 10g/kg of seed and soak in 1lit of water overnight. Decant the excess water and allow the seeds to sprout for 24hrs and then sow.')} {'\n'}●{' '}
        {t('Biocontrol agents are compatible with biofertilizers')} {'\n'}●{' '}
        {t('Biofertilizers and biocontrol agents can be mixed together for seed soaking')} {'\n'}●{' '}
        {t(
          'Fungicides and biocontrol agents are incompatible',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Forming Seedbeds')}:-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Mark plots of 2.5m breadth with channels 30cm wide all around the seedbeds.')} {'\n'}●{' '}
        {t(
          'Length of the seed bed may vary from 8 to 10m according to soil and slope of the land.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Collect the puddled soil from the channel and spread on the seedbeds or drag a heavy stone along the channel to lower it, so that the seed bed is at a higher level.'
        )}{' '}
        {'\n'}●{' '}
        {t('Level the surface of the seedbed, so that the water drains into the channel.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 7,
        }}>
        {t('Dry bed')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
      ●{' '}{t('This method is suitable for areas where blight disease is more prone and is areas where there is scarcity for water.')}{' '}
      {'\n'}●{' '}
        {t(
          'This method is practiced in areas having loamy or silt loam soils.'
        )}{' '}
        {'\n'}●{' '}
        {t('In this method the bed is prepared in dry conditions and watered till saturation after sowing of seeds.')}{' '}
        {'\n'}●{' '}
        {t('Once the seedlings emerge and grow, water the beds periodically as and when required.')}{' '}
        {'\n'}●{' '}
        {t('The seedlings grow comparatively well and healthy in dry beds.',)}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Sowing')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        {t('Sow the sprouted seeds uniformly on the seedbed, having thin film of water in the nursery.',)}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Water Management')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}
        {t(
          'Drain the water 18 to 24hrs after sowing',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Care must be taken to avoid stagnation of water in any part of the seedbed.',
        )}{' '}
        {'\n'}●
        {t(
          'Allow enough water to saturate the soil from 3rd to 5th day. From 5th day onwards, increase the water depth to 1.5cm depending on the height of the seedlings.',
        )}{' '}
        {'\n'}●{' '}
        {t(
          'Thereafter maintain 2.5cm depth of water.',
        )}
        {'\n'} ●{' '}
        {t(
          'Apply any one of the pre-emergence herbicides viz., Pretilachlor + safener 0.3kg/ha, on 3rd or 4th day after sowing to control weeds in the lowland nursery. Keep a thin film of water and allow it to disappear. Avoid drainage of water. This will control germinating weeds.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Apply pre-emergence herbicides')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        
        {t(
          'Pretilachlor + safener 0.3kg/ha, on 3rd or 4th day after sowing to control weeds in the lowland nursery.',
        )}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Nutrient Management')} :-
      </Text>
      <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Apply 1 tonne of fully decomposed FYM or compost to 20cents nursery and spread the manure uniformly on dry soil.')}
        {'\n'} ●{' '}
        {t('Basal application of DAP is recommended when the seedlings are to be pulled out in 20-25 days after sowing in less fertile nursery soils.')}
        {'\n'} ● {' '}
        {t('For that situation, before the last puddling, apply 40kg of DAP and if not readily available, apply straight fertilizers 16kg of urea and 120kg of super phosphate.')}
        {'\n'} ●{' '}
        {t('If seedlings are to be pulled out after 25 days, application of DAP is to be done 10 days prior to pulling out.')}
        {'\n'} ●{' '}
        {t('For clayey soils where root snapping is a problem, 4kg of gypsum and 1kg of DAP/cent can be applied at 10 days after sowing.',)}
      </Text>
    </ScrollView>
  );
};


export const RiceCropDataTransPlanting = () => {
    const [t, i18n] = useTranslation();
    return (
      <ScrollView
        style={{height: height - 270}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {t('TRANSPLANTING')}
        </Text>
        <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 8,
        }}>
        {t('Main Field Management')}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'gray',
          marginVertical: 7,
        }}>
        {t('Land Preparation')} :-
      </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}{t('Plough the land during summer to economize the water requirement for initial preparation of land.')}
          {'\n'}●{' '}
          {t(
            'Flood the field 1 or 2 days before ploughing and allow water to soak in.',
          )}
          {'\n'} ●{' '}
          {t(
            'Keep the surface of the field covered with water.',
          )}
          {'\n'} ●{' '}
          {t('Keep water to a depth of 2.5cm at the time of puddling.')}{' '}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Special Technologies For Problem Soils')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}
          {t('For fluffy paddy soils: compact the soil by passing 400kg stone roller or oil-drum with stones inside, eight times at proper moisture level (moisture level at friable condition of soil which is approximately 13 to18%) once in three years, to prevent the sinking of draught animals and workers during puddling.')}
          {'\n'} ●{' '}
          {t('For sodic soils with pH values of more than 8.5, plough at optimum moisture regime, apply gypsum at 50% gypsum requirement uniformly, impound water, provide drainage for leaching out soluble salts and apply green leaf manure at 5 t/ha, 10 to 15 days before transplanting. Mix 37.5kg of Zinc sulphate per ha with sand to make a total quantity of 75kg and spread the mixture uniformly on the leveled field. Do not incorporate the mixture in the soil. Rice under sodic soil responds well to these practices.')}
        {'\n'} ●{' '}
        {t('For saline soils with EC values of more than 4 dS/m, provide lateral and main drainage channels (60cm deep and 45cm wide), apply green leaf manure at 5 t/ha at 10 to 15 days before transplanting and 25% extra dose of nitrogen in addition to recommended P and K and ZnSo4 at 37.5 kg/ha at planting.')}
        {'\n'} ●{' '}
        {t('For acid soils apply lime based on the soil analysis for obtaining normal rice yields. Lime is applied 2.5t/ha before last ploughing. Apply lime at this rate to each crop up to the 5th crop.',)}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 7,
          }}>
          {t('Stand Establishment')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Optimum Age Of Seedlings For Quick Establishment')} :-
        </Text>
        <Text style={{color:'#000',textAlign:'justify'}}>
            {t('Optimum age of the seedlings is 18-22 days for short, 25-30 days for medium and 35-40 days for long duration varieties.',)}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Pulling Out The Seedlings')} :-
        </Text>

        <Text style={{color: '#000', textAlign: 'justify'}}>
          ●{' '}
          {t('Pull out the seedlings at the appropriate time (4th leaf stage).')}
          {'\n'} ●{' '}
          {t('Pulling at 3rd leaf stage is also possible. These seedlings can produce more tillers, provided enough care taken during the establishment phase (See section 1.8 Integrated Crop Management (ICM) - Rice-SRI) through thin film of water management and perfect leveling of main field.')}
        {'\n'}●{' '}
        {t('Transplanting after 5th and higher order leaf numbers will affect the performance of the crop and grain yield. Then they are called as ‘aged seedlings’. Special package is needed to minimize the grain yield loss while planting those aged seedlings.',)}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Root Dipping')}:-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Prepare the slurry with 5 packets (1000 g)/ha of Azospirillum and 5 packets (1000g/ha) of Phosphobacteria or 10 packets of (2000g/ha) of Azophos inoculant in 40 lit. of water and dip the root portion of the seedlings for 15 - 30 minutes in bacterial suspension and transplant.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Plant Seedlings In The Main Field')}:-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Transplant 2-3 seedlings/hill for short duration and 2 seedlings/hill for medium and long duration varieties.',
          )}
          {'\n'}●{' '}
          {t('Shallow planting (3 cm) ensures quick establishment and more tillers.')}
          {'\n'} ●{' '}
          {t('Deeper planting (> 5cm) leads to delayed establishment and reduced tillers.')}
          {'\n'} ●{' '}
          {t('Line planting permits rotary weeding and its associated benefits.')}
          {'\n'} ●{' '}
          {t('Allow a minimum row spacing of 20 cm to use rotary weeder.')}
          {'\n'} ●{' '}
          {t('Fill up the gaps between 7th and 10th DAT.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management Of Aged Seedlings')}:-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Follow the spacing recommended to medium and low fertility soil.',
          )}
          {'\n'}●{' '}
          {t('Plant one or two seedlings per hill.')}
          {'\n'} ●{' '}
          {t('Avoid cluster planting of aged seedlings, which are hindering the formation of new tillers.')}
          {'\n'} ●{' '}
          {t('New tillers alone are capable of producing normal harvestable panicle. Weak panicle may appear in the mother culm within three weeks after transplanting and vanishes well before harvest.')}
          {'\n'} ●{' '}
          {t('To encourage the tiller production, enhance the basal N application by 50% from the recommended and thereafter follow the normal schedule recommended for other stages.',)}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginVertical: 7,
          }}>
          {t('Nutrient Management')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Applications Of Organic Manures')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply 12.5 t of FYM or compost or green leaf manure @ 6.25 t/ha.',
          )}
          {'\n'}●{' '}
          {t('If green manure is raised @ 20 kg /ha in situ, incorporate it to a depth of 15 cm using a green manure trampler or tractor.')}
          {'\n'} ●{' '}
          {t('In the place of green manure, press-mud / composted coir-pith can also be used.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Stubble Incorporation')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply 22 kg urea / ha at the time of first puddling while incorporating the stubbles of previous crop to compensate immobilization of N by the stubbles.',
          )}
          {'\n'}●{' '}
          {t('This may be done at least 10 days prior to planting of subsequent crop.This recommendation is more suitable for double crop wetlands, wherein, the second crop is transplanted in succession with short turn around period.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Biofertilizer Application')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Broadcast 10 kg of soil based powdered BGA flakes at 10 DAT for the dry season crop. Maintain a thin film of water for multiplication.',
          )}
          {'\n'}●{' '}
          {t('Raise azolla as a dual crop by inoculating 250 kg/ha 3 to 5 DAT and then incorporate during weeding for the wet season crop.')}
          {'\n'}●{' '}
          {t('Mix 10 packets (2000 g)/ha of Azospirillum and 10 packets (2000g/ha)of Phosphobacteria or 20 packets (4000g/ha) of Azophos inoculants with 25 kg FYM and 25 kg of soil and broadcast the mixture uniformly in the main field.')}
          {'\n'}●{' '}
          {t('Pseudomonas fluorescens (Pf 1) at 2.5 kg/ha mixed with 50 kg FYM and 25 kg of soil and broadcast the mixture uniformly before transplanting.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Application Of Inorganic Fertilizers')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply fertilizer nutrients as per soil test recommendations',
          )}
          {'\n'}●{' '}
          {t('N dose may be through Leaf Color Chart (LCC)')}
          {'\n'}●{' '}
          {t('P & K may be through Site Specific Nutrition Management by Omission plot technique (Ref. Appendix II)')}
          {'\n'}●{' '}
          {t('If the above recommendation are not able to be followed, adopt blanket recommendation as follows.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('N Management Through LCC')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Time of application is decided by LCC score.',
          )}
          {'\n'}●{' '}
          {t('Repeat the observations at weekly intervals up to heading')}
          {'\n'}●{' '}
          {t('Observe the leaf colour in the fully opened third leaf from the top as index leaf.')}
          {'\n'}●{' '}
          {t('Match the leaf color with the colours in the chart during morning hours(8-10 am).')}
          {'\n'}●{' '}
          {t('Take observation in 10 places.')}
          {'\n'}●{' '}
          {t('LCC critical value is 3.0 in low N response cultures like White Ponni and 4.0 in other cultivars and hybrids.')}
          {'\n'}●{' '}
          {t('When 6/10 observations show less than the critical colour value, N can be applied @ 35kg N/ha in dry season and 30kg N/ha in wet season per application per ha.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Application Of P Fertilizer')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'P may be applied as basal and incorporated.',
          )}
          {'\n'}●{' '}
          {t('When the green manure is applied, rock phosphate can be used as a cheap source of P fertilizer. If rock phosphate is applied, the succeeding rice crop need not be supplied with P. Application of rock phosphate + single super phosphate or DAP mixed in different proportions (75:25 or 50:50) is equally effective as SSP or DAP alone.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Application Of Zinc Sulphate')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply 25 kg of zinc sulphate mixed with 50 kg dry sand just before transplanting.',
          )}
          {'\n'}●{' '}
          {t('It is enough to apply 12.5 kg zinc sulphate /ha, if green manure (6.25 t/ha) or enriched FYM, is applied.')}
          {'\n'}●{' '}
          {t('If deficiency symptom appears, foliar application of 0.5% Zinc sulphate + 1.0% urea can be given at 15 days interval until the Zn deficiency symptoms disappear.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Application Of Gypsum')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply 500 kg of gypsum/ha (as source of Ca and S nutrients) at last ploughing.',
          )}
          </Text>
          <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Foliar Nutrition')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Foliar spray of 1% urea + 2% DAP + 1% KCl at PI and 10 days later fo rall varieties.',
          )}
          </Text>
          <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Weed Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Use of rotary weeder from 15 DAT at 10 days interval. It saves labour for weeding, aerates the soil and root zone, prolongs the root activity, and improves the grain filling though efficient translocation and ultimately the grain yield.',
          )}
          {'\n'}●{' '}
          {t('Cultural practices like dual cropping of rice-azolla, and rice-green manure (described in wet seeded rice section 2.5 & 2.6 of this chapter) reduces the weed infestation to a greater extent.')}
          {'\n'}●{' '}
          {t('Summer ploughing and cultivation of irrigated dry crops during post-rainy periods reduces the weed infestation.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Pre-Emergence Herbicides')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Use Butachlor 1.25kg/ha or Anilophos 0.4kg/ha as pre-emergence application. Alternatively, pre-emergence application of herbicide mixture viz., Butachlor 0.6kg + 2,4 DEE 0.75kg/ha, or Anilophos + 2, 4 DEE "ready-mix" at 0.4kg/ha followed by one hand weeding on 30 - 35 DAT will have a broad spectrum of weed control.',
          )}
          {'\n'}●{' '}
          {t('Any herbicide has to be mixed with 50kg of dry sand on the day of application (3 - 4 DAT) and applied uniformly to the field with thin film water on the 3rd DAT. Water should not be drained for next 2 days from the field (or) fresh irrigation should not be given.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Post-Emergence Herbicides')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'If pre-emergence herbicide application is not done, hand weeding has to be done on 15th DAT.',
          )}
          {'\n'}●{' '}
          {t('2,4-D sodium salt (Fernoxone 80% WP) 1.25 kg/ha dissolved in 625 litres with a high volume sprayer, three weeks after transplanting or when the weeds are in 3 - 4 leaf stage.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Water Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Puddling and leveling minimizes the water requirement.',
          )}
          {'\n'}●{' '}
          {t('Plough with tractor drawn cage wheel to reduce percolation losses and to save water requirement up to 20%.')}
          {'\n'}●{' '}
          {t('Maintain 2.5cm of water over the puddle and allow the green manure to decompose for a minimum of 7 days in the case of less fibrous plants like sunnhemp and 15 days for more fibrous green manure plants like Kolinchi (Tephrosia purpurea).')}
          {'\n'}●{' '}
          {t('At the time of transplanting, a shallow depth of 2cm of water is adequate since high depth of water will lead to deep planting resulting in reduction of tillering.')}
          {'\n'}●{' '}
          {t('Maintain 2 cm of water up to seven days of transplanting.')}
          {'\n'}●{' '}
          {t('After the establishment stage, cyclic submergence of water (as in table) is the best practice for rice crop. This cyclic 5cm submergence has to be continued throughout the crop period.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Precautions For Irrigation')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'The field plot can be 25 to 50 cents depending on the source of irrigation.',
          )}
          {'\n'}●{' '}
          {t('Field to field irrigation should be avoided. Field should be irrigated individually from a channel.')}
          {'\n'}●{' '}
          {t('Small bund may be formed parallel to the main bund of the field at a distance of 30 to 45cm within the field to avoid leakages of water through main bund crevices.')}
          {'\n'}●{' '}
          {t('To minimize percolation loss, the depth of stagnated water should be 5cm or less.')}
          {'\n'}●{' '}
          {t('In water logged condition, form open drains, about 60cm in depth and 45cm width across the field.')}
          {'\n'}●{' '}
          {t('Care should be taken not to allow development of cracks.')}
          {'\n'}●{' '}
          {t('In canal command area, conjunctive use of surface and ground water may be resorted to for judicious use of water.')}
          {'\n'}●{' '}
          {t('In double cropped wetland of command area, raise groundnut / pulse in the place of Kuruvai rice if water is a constraint or go for rice cultivation as described in 5. Dry Seeded Irrigated Un-Puddled Lowland Rice.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Harvesting')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Taking the average duration of the crop as an indication, drain the water from the field 7 to 10 days before the expected harvest date as draining hastens maturity and improves harvesting conditions.',
          )}
          {'\n'}●{' '}
          {t('When 80% of the panicles turn straw colour, the crop is ready for harvest. Even at this stage, the leaves of some of the varieties may remain green.')}
          {'\n'}●{' '}
          {t('Confirm maturity by selecting the most mature tiller and dehusk a few grains. If the rice is clear and firm, it is in hard dough stage.')}
          {'\n'}●{' '}
          {t('When most of the grains at the base of the panicle in the selected tiller are in a hard dough stage, the crop is ready for harvest. At this stage harvest the crop, thresh and winnow the grains.')}
          {'\n'}●{' '}
          {t('Dry the grains to 12% moisture level for storage. Grain yield in rice is estimated only at 14% moisture for any comparison.')}
          {'\n'}●{' '}
          {t('Maturity may be hastened by 3-4 days by spraying 20% NaCl a week before harvest to escape monsoon rains.')}
        </Text>
      </ScrollView>
    );
  };



  export const RiceCropDataTransNurseryDamage = () => {
    const [t, i18n] = useTranslation();
    return (
      <ScrollView
        style={{height: height - 270}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {t('DISEASES OF RICE')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Blast - Pyricularia Oryzae')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('The fungus attacks the crop at all stages from seedlings in nursery to heading in main field. The typical symptoms appear on leaves, leaf sheath, rachis, nodes and even the glumes are also attacked.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Application of excessive doses of nitrogenous fertilizers, intermittent drizzles, cloudy weather, high relative humidity (93-99 per cent), low night temperature (between 15-20 0C or less than 26 0C), more number of rainy days, longer duration of dew, cloudy weather, slow wind movement and availability of collateral hosts.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Use of seeds from a disease free crop',
          )}
          {'\n'}●{' '}
          {t('Grow resistant varieties like Simhapuri, Tikkana, Sriranga, Phalguna, Swarnadhan, Swarnamukhi, MTU 7414, MTU 9992, MTU 1005, Swathi, IR 64, IR 36, Sravani, Jaya, Vijaya, Ratna, RP 4-14, IET 1444, IR20, TKM 6, MTU-3 & 5 and NLR 9672 & 9674 in different tracts of Andhra Pradesh.')}
          {'\n'}●{' '}
          {t('Remove and destroy the weed hosts in the field bunds and channels.')}
          {'\n'}●{' '}
          {t('Split application of nitrogen and judicious application of nitrogenous fertilizers.')}
          {'\n'}●{' '}
          {t('Treat the seeds with Captan or Thiram or Carbendazim or Carboxin or Tricyclazole at 2 g/kg.')}
          {'\n'}●{' '}
          {t('Seed treatment with biocontrol agent Trichoderma viride@ 4g/kg or Pseudomonas fluorescens @ 10g/kg of seed. Avoid close spacing of seedlings in the main field.')}
          {'\n'}●{' '}
          {t('Spray the nursery with Carbendazim 25 g or Edifenphos 25 ml for 8 cent nursery')}
          {'\n'}●{' '}
          {t('Spray the main field with Edifenphos@0.1% or Carbendazim@0.1% or Tricyclazole@0.06% or Thiophanate Methyl@0.1%.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Drechslera Oryzae')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The fungus attacks the crop from seedling in nursery to milk stage in main field. Symptoms appear as lesions (spots) on the coleoptile, leaf blade, leaf sheath, and glumes, being most prominent on the leaf blade and glumes')}
        {'\n'}●{' '}    
        {t('The disease appears first as minute brown dots, later becoming cylindrical or oval to circular. The several spots coalesce and the leaf dries up.')}
        {'\n'}●{' '}   
        {t('The seedlings die and affected nurseries can often be recognized from a distance by their brownish scorched appearance. Dark brown or black spots also appear on glumes which contain large number of conidiophores and conidia of the fungus.')} 
        {'\n'}●{' '}
        {t('It causes failure of seed germination, seedling mortality and reduces the grain quality and weight. The disease is associated with a physiological disorder known as akiochi in Japan. Abnormal soil conditions (Deficiency of potassium) predispose the plants to heavy infection.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Temperature of 25-300C with relative humidity above 80 per cent are highly favourable. Excess of nitrogen aggravates the disease incidence.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Use disease free seeds.',
          )}
          {'\n'}●{' '}
          {t('Field sanitation-removal of collateral hosts and infected debris in the field.')}
          {'\n'}●{' '}
          {t('Crop rotation')}
          {'\n'}●{' '}
          {t('Adjustment of planting time')}
          {'\n'}●{' '}
          {t('Proper fertilization')}
          {'\n'}●{' '}
          {t('Use of slow release nitrogenous fertilizers is advisable.')}
          {'\n'}●{' '}
          {t('Good water management')}
          {'\n'}●{' '}
          {t('Use of soil amendments')}
          {'\n'}●{' '}
          {t('Grow disease tolerant varieties viz., Bala, BAM 10, IR-20, Jaya, Ratna, Tellahamsa and Kakatiya.')}
          {'\n'}●{' '}
          {t('Treat the seeds with Thiram or Captan at 4 g/kg and with Mancozeb@0.3%')}
          {'\n'}●{' '}
          {t('Spray the crop in the main field twice with Mancozeb@0.2%, once after flowering and second spray at milky stage.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Sheath Rot - Sarocladium Oryzae')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Sheath rot occurs usually at the booting stage of the crop. Initial symptoms are noticed only on the upper most leaf sheath enclosing young panicles.')}
        {'\n'}●{' '}    
        {t('The flag leaf sheath show oblong or irregular greyish brown spots. They enlarge and develop grey centre and brown margins covering major portions of the leaf sheath.')}
        {'\n'}●{' '}   
        {t('The young panicles may remain within the sheath or emerge partially. The affected sheath and panicles rot and abundant whitish powdery fungal growth is formed inside the leaf sheath. The grain discolours and shrivels.')} 
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Closer planting, high doses of nitrogen, high humidity and temperature around 25-30OC. Injuries made by leaf folder, brown plant hopper and mites increase infection.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Apply recommended doses of fertilizers.',
          )}
          {'\n'}●{' '}
          {t('Adopt optimum spacing.')}
          {'\n'}●{' '}
          {t('Spray twice with Carbendazim @0.1% or Benomyl@0.05% or Mancozeb@0.2% or Chlorothalonil@0.2% at boot leaf stage and 15 days later.')}
          {'\n'}●{' '}
          {t('Soil application of gypsum in 2 equal splits (500 kg/ha) reduce the sheath rot incidence.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Stem Rot - Sclerotium Oryzae')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Small black lesions are formed on the outer leaf sheath near the water line and they enlarge and reach the inner leaf sheath also.')}
        {'\n'}●{' '}    
        {t('The affected tissues rot and abundant sclerotia are seen in the rotting tissues. The culm collapses and plants lodge. If the diseased tiller is opened, profuse mycelial growth and large number of sclerotia can be seen. The sclerotia may be seen in the stubbles after harvest.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Infestation of leaf hoppers and stem borer and high doses of nitrogenous fertilizers aggravates the disease.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Use recommended doses of fertilizer.',
          )}
          {'\n'}●{' '}
          {t('Deep ploughing in summer and burning of stubbles and infected straw')}
          {'\n'}●{' '}
          {t('Use of resistant or non-lodging varieties (Basumati 3, Basumati 370, Mushkan 7, Mushkan 41 and Bara 62 were found resistant to stem rot in Punjab).')}
          {'\n'}●{' '}
          {t('Draining off the irrigation water and allow the soil to dry.')}
          {'\n'}●{' '}
          {t('Avoid flow of irrigation water from infected fields to healthy fields.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Sheath blight - Rhizoctonia solani')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The fungus affects the crop from tillering to heading stage. Initial symptoms are noticed on leaf sheaths near water level. On the leaf sheath oval or elliptical or irregular greenish grey spots are formed. As the spots enlarge, the centre becomes greyish white with an irregular blackish brown or purple brown border.')}
        {'\n'}●{' '}    
        {t('Lesions on the upper parts of plants extend rapidly coalesing with each other to cover entire tillers from the water line to the flag leaf. The presence of several large lesions on a leaf sheath usually causes death of the whole leaf, and in severe cases all the leaves of a plant may be blighted in this way.')}
        {'\n'}●{' '} 
        {t('The infection extends to the inner sheaths resulting in death of the entire plant. Older plants are highly susceptible. Five to six week old leaf sheaths are highly susceptible. Plants heavily infected in the early heading and grain filling growth stages produce poorly filled grain, especially in the lower part of the panicle.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('High relative humidity (96-97 per cent), high temperature (30-32 0C), closer planting and heavy doses of nitrogenous fertilizers.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Avoid excess doses of fertilizers.',
          )}
          {'\n'}●{' '}
          {t('Adopt optimum spacing.')}
          {'\n'}●{' '}
          {t('Eliminate weed hosts.')}
          {'\n'}●{' '}
          {t('Apply organic amendments.')}
          {'\n'}●{' '}
          {t('Avoid flow of irrigation water from infected fields to healthy fields.')}
          {'\n'}●{' '}
          {t('Deep ploughing in summer and burning of stubbles.')}
          {'\n'}●{' '}
          {t('Grow disease tolerant varieties like Shiva (WGL 3943)')}
          {'\n'}●{' '}
          {t('Spray Propiconazole@0.1% or Hexaconazole@0.2% or Validamycin@0.2%')}
          {'\n'}●{' '}
          {t('Seed treatment with Pseudomonas fluorescens @ of 10g/kg of seed followed by seedling dip @ of 2.5 kg of product/ha dissolved in 100 litres and dipping for 30 minutes.')}
          {'\n'}●{' '}
          {t('Soil application of P.fluorescens @ of 2.5 kg/ha after 30 days of transplanting (This product should be mixed with 50 kg of FYM/Sand and then applied.')}
          {'\n'}●{' '}
          {t('Foliar spray at 0.2% concentration commencing from 45 days after transplanting at 10 days interval for 3 times depending upon the intensity of disease.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('False Smut - Ustilaginoidea Virens')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The fungus transforms individual grains into yellow or greenish spore balls of velvety appearance which are small at first and 1 cm or longer at later stages.')}
        {'\n'}●{' '}    
        {t('At early stages the spore balls are covered by a membrane which bursts with further growth. Due to the development of the fructification of the pathogen, the ovaries are transformed into large velvety green masses. Usually only a few spikelets in a panicle are affected.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Rainfall and cloudy weather during the flowering and maturity periods are Favourable.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        {t(
            'Spray copper oxychloride@0.3% or carbendazim@0.1% at panicle emergence stage',
          )}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Bacterial Leaf Blight - Xanthomonas Oryzae')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('The bacterium induces either wilting of plants or leaf blight. Wilt syndrome known as Kresek is seen in seedlings within 3-4 weeks after transplanting of the crop. Kresek results either in the death of whole plant or wilting of only a few leaves. The bacterium enters through the hydathodes and cut wounds in the leaf tips, becomes systemic and cause death of entire seedling.')}
        {'\n'}●{' '}    
        {t('The disease is usually noticed at the time of heading but in severe cases occur earlier also. In grown up plants water soaked, translucent lesions appear usually near the leaf margin. The lesions enlarge both in length and width with a wavy margin and turn straw yellow within a few days, covering the entire leaf. As the disease progresses, the lesions cover the entire leaf blade which may turn white or straw coloured.')}
        {'\n'}●{' '}
        {t('Lesions may also be seen on leaf sheaths in susceptible varieties. Milky or opaque dew drops containing bacterial masses are formed on young lesions in the early morning. They dry up on the surface leaving a white encrustation. The affected grains have discoloured spots surrounded by water soaked areas. If the cut end of leaf is dipped in water, bacterial ooze makes the water turbid.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Clipping of tip of the seedling at the time of transplanting, heavy rain, heavy dew, flooding, deep irrigation water, severe wind, temperature of 25-300C and application of excessive nitrogen, especially late top dressing.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Grow resistant cultivars like MTU 9992, Swarna, Ajaya, IR 20, IR 42, IR 50, IR 54, TKM 6, Mashuri, IET 4141, IET 1444, IET 2508, Chinsura Boro, etc.',
          )}
          {'\n'}●{' '}
          {t('Resistant donors: Tetep, Tadukan, Zenith, etc.')}
          {'\n'}●{' '}
          {t('Affected stubbles are to be destroyed by burning or through ploughing.')}
          {'\n'}●{' '}
          {t('Judicious use of nitrogenous fertilizers.')}
          {'\n'}●{' '}
          {t('Avoid clipping of tip of seedling at the time of transplanting.')}
          {'\n'}●{' '}
          {t('Avoid flooded conditions or drying of the field (not at the time of flowering)')}
          {'\n'}●{' '}
          {t('Avoid flow of irrigation water from infected to healthy field.')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Bacterial Leaf Streak - Xanthomonas Campestris')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Fine translucent streaks appear between the veins of the leaf are the first symptoms.')}
        {'\n'}●{' '}    
        {t('The lesions enlarge lengthwise and advance over larger veins laterally and turn brown. On very susceptible varieties a yellow halo appears around the lesions. On the surface of the lesions, bacteria ooze out and form small yellow band-like exudates under humid conditions. In severe cases the leaves may dry up.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('High relative humidity (83-93%) or dew during morning hours for 2 to 3 hours.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Grow resistant varieties',
          )}
          {'\n'}●{' '}
          {t('IR 20, Krishna and Jagannath are tolerant to BLS.')}
          {'\n'}●{' '}
          {t('Affected stubbles are to be destroyed by burning or through ploughing.')}
          {'\n'}●{' '}
          {t('Judicious use of nitrogenous fertilizers.')}
          {'\n'}●{' '}
          {t('Avoid clipping of tip of seedling at the time of transplanting.')}
          {'\n'}●{' '}
          {t('Avoid flooded conditions or drying of the field (not at the time of flowering).')}
          {'\n'}●{' '}
          {t('Avoid flow of irrigation water from infected to healthy field.')}
          {'\n'}●{' '}
          {t('Soak the seed in Streptocycline (250 ppm) followed by hot water treatment at 52 0C for 30 minutes eradicates seedling infection.')}
          {'\n'}●{' '}
          {t('Spray Streptocycline (250 ppm) along with copper oxychloride (0.3%).')}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          {t('Tungro Disease')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Symptoms')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t('Infection occurs both in the nursery and in the main field. Plants are markedly stunted. Stunting is more severe on susceptible varieties and slight on more resistant varieties. Leaves show yellow to orange discoloration and interveinal chlorosis.')}
        {'\n'}●{' '}    
        {t('Yellow discoloration is commonly seen in “Japonica” varieties, while “Indica” varieties show orange discoloration. Yellowing starts from the tip of the leaf and may extend to the lower part of the leaf blade.')}
        {'\n'}●{' '}   
        {t('Young leaves are often mottled with pale green to whitish interveinal stripes and the old leaves may have rusty streaks of various sizes. The plants may be killed if infected early.')}
        {'\n'}●{' '}  
        {t('Tillering is reduced with poor root system. The infected plants have few spikelets and panicles are small with discoloured grains.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Favourable Conditions')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          {t('Tungro infected plants can be chemically identified by lodine Test. Ten cm long leaf tip is cut in the early morning before 6 A.M. and dipped in a solution containing 2g Iodine and 6 g Potassium Iodide in 100 ml of water for 30 minutes. Tungro infected leaves show dark.')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
            marginVertical: 7,
          }}>
          {t('Management')} :-
        </Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>
        ●{' '}{t(
            'Summer deep ploughing and burning of stubbles.',
          )}
          {'\n'}●{' '}
          {t('Destroy weed hosts of the virus and vectors.')}
          {'\n'}●{' '}
          {t('Grow disease tolerant cultivars like MTU 9992, 1002, 1003, 1005,Suraksha, Vikramarya, Bharani, IR 36, IET 2508, RP 4-14, IET 1444, IR50 and Co45.')}
          {'\n'}●{' '}
          {t('Control the vectors in the nursery by application of carbofuran granules @170 g/cent, 10 days after sowing and @10kg/ac in main filed.')}
          {'\n'}●{' '}
          {t('Spray Monochrotophos@2.2 ml/lt or Phosphamidan @1ml/lt or Ethophenphos@1.5ml/lt or Neem oil @3 per cent in the main field 15 and 30 days after transplanting to control leaf hoppers.')}
        </Text>
      </ScrollView>
    );
  };