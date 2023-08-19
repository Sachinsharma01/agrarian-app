import React from 'react';
import {
  CropDataNursery,
  CropDataTransNurseryDamage,
  CropDataTransPlanting,
} from '../assets/data/crops';
import {
  RiceCropDataNursery,
  RiceCropDataTransNurseryDamage,
  RiceCropDataTransPlanting,
} from '../assets/data/rice';
import {
  MaizeCropDataNursery,
  MaizeCropDataTransNurseryDamage,
  MaizeCropDataTransPlanting,
} from '../assets/data/maize';
import {Brinjal} from '../assets/data/brinjal';
import {Cauliflower} from '../assets/data/cauliflower';
import {Cotton} from '../assets/data/cotton';
import {Wheat} from '../assets/data/wheat';
import {Lentil} from '../assets/data/lentil';
import {Mustard} from '../assets/data/mustard';
import {Oat} from '../assets/data/oat';
import {Pea} from '../assets/data/pea';
import {Potato} from '../assets/data/potato';
import {Radish} from '../assets/data/radish';
import {Tomato} from '../assets/data/tomato';

const getOngoingCrop = (cropName: string, idx: number) => {
  switch (cropName) {
    case 'chili':
      return idx === 1 ? (
        <CropDataNursery />
      ) : idx === 2 ? (
        <CropDataTransPlanting />
      ) : (
        <CropDataTransNurseryDamage />
      );
    case 'Rice':
      return idx === 1 ? (
        <RiceCropDataNursery />
      ) : idx === 2 ? (
        <RiceCropDataTransPlanting />
      ) : (
        <RiceCropDataTransNurseryDamage />
      );
    case 'Maize':
      return idx === 1 ? (
        <MaizeCropDataNursery />
      ) : idx === 2 ? (
        <MaizeCropDataTransPlanting />
      ) : (
        <MaizeCropDataTransNurseryDamage />
      );
    case 'Brinjal':
      return <Brinjal />;
    case 'Cauliflower':
      return <Cauliflower />;
    case 'Cotton':
      return <Cotton />;
    case 'Wheat':
      return <Wheat />;
    case 'Lentisl':
      return <Lentil />;
    case 'Mustard':
      return <Mustard />;
    case 'Oats':
      return <Oat />;
    case 'Pea':
      return <Pea />;
    case 'Potato':
      return <Potato />;
    case 'Radish':
      return <Radish />;
    case 'Tomato':
      return <Tomato />;
    default:
      return null;
  }
};

export default getOngoingCrop;
