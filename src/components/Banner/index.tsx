import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BannerSlide from './BannerSlide';
import sliderData from '../../assets/slider';
import {width} from '../../utils/getDimensions';
import config from '../../config';

const Paginate = ({activeSlide}: any) => {
  return (
    <Pagination
      dotsLength={5}
      activeDotIndex={activeSlide}
      containerStyle={{backgroundColor: '#fff', marginTop: 15}}
      dotContainerStyle={{height: 1}}
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: config.constants.primaryColor,
      }}
      inactiveDotStyle={{}}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

const Carousal = ({onPress}: any) => {
  const renderBanner = ({item, idx}: any) => {
    return <BannerSlide data={item} />;
  };
  const [activeSlide, setActiveSlide] = React.useState(0);
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
      }}>
      <Carousel
        layout={'default'}
        layoutCardOffset={18}
        data={sliderData}
        renderItem={renderBanner}
        sliderWidth={width - 40}
        itemWidth={300}
        autoplay={true}
        enableSnap={true}
        loop={true}
        onSnapToItem={idx => setActiveSlide(idx)}
      />
      <Paginate activeSlide={activeSlide} />
    </View>
  );
};

export default Carousal;
