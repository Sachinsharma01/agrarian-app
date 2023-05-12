import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {height} from '../../utils/getDimensions';

const CropDataOne = () => {
  return (
    <ScrollView
      style={{height: height - 270}}
      showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        How To Nursery Raising
      </Text>
      <Text>Site selection & initial land preparation</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 5,
        }}>
        Take instructions:-
      </Text>
      <Text style={{color: '#000'}}>
        ● Suitable soil and weather conditions are the most important factors
        for the cultivation of chillies.{'\n'}● The chilli grows in all soils
        from light sandy to heavy clay. {'\n'}● Light soils are good for an
        early crop, while clay loam and silt loam soios are well suiuted for
        heavy yields . {'\n'}● Ph range :- 6.5-7.5{'\n'} ● If the acidic soil is
        acidic , liming is required. {'\n'}● Sufficient water availability{' '}
        {'\n'}● Removing crop residues. {'\n'}● Removal of stubbles if any in
        field planned to cultivate chilli crop.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 5,
        }}>
        Weather conditions:-
      </Text>
      <Text style={{color: '#000'}}>
        ● The chilli is a warm saeason crop. {'\n'}● The crop does well under an
        average monthly temperature of 20 to 25 C. {'\n'}● Long dry spell and
        heavy rainfall also affect on growth and fruiting of plant
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 5,
        }}>
        Choosing the various type varieties and Seed rate :-
      </Text>
      <Text>
        • Varieties:- Manjira ,sarangi, Teja , Yeshaswini, Demon, Arunim ,
        wonder hot,sitaragold , indica, krithi , goli, Nongwoo, Jewelry, Fito
        gauri
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        Nursery Raising :-
      </Text>
      <Text style={{color: '#000'}}>
        ● Nursery soil nare treated with tricoderma viridae Or pseudomonas
        culture 5-6 Days before sowing {'\n'}● For 1m2 of nursery area apply 5kg
        well rotten FYM, DAP @ 50g, and also apply CALDAN @ 2.5g {'\n'}●
        Dimensions of raised bed is 125-150 cm width and length according to
        use. {'\n'}● Depth ofseed is 0.5cm and covered with topsoil and spacing
        between two lines is 2-2.5 cm{'\n'} ● Aftersowing the seeds, mulch with
        green leaves and irrigate with rose cane daily in the morning.{'\n'} ●
        Cover the nursery bed with nylon net to prevent damage by insect and
        also prevent with climatic effect. {'\n'}● Remove the mulch immediately
        after germination of the seeds.{'\n'} ● Weeding should be taken up if
        weed are present in the nursery. {'\n'}● Saplings will be ready to plant
        in 5-6 weeks.{'\n'} ● Restrict irrigation one week before transplanting
        and irrigate heavily on the previous day of transplanting to harden the
        seedlings
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        Procurement of Farm Yard Manure :-
      </Text>
      <Text style={{color: '#000'}}>
        • A well decomposed FYM @ 12-15 tnns should be mixed with biofertilizers
        @5kg, Tricoderma @2kg , Pseudomonas @2kg and mixing biofertilizers.
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        Farm Yard Manure application
      </Text>
      <Text style={{color: '#000'}}>
        ● Apply FYM fortified with biofertilizers for main fields.{'\n'} ●
        Rotavating or cultivating to mix the FYM and soil.{'\n'} ● FYM helps
        soil conditions
      </Text>
    </ScrollView>
  );
};

export default CropDataOne;
