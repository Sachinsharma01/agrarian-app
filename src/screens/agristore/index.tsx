import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/getDimensions';
import products from '../../assets/products';
import ProductItem from '../../components/product/ProductItem';

const AgriStore = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{height: height - 100, backgroundColor: '#fff'}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: width,
            flexWrap: 'wrap',
          }}>
          {products.map((product: any, idx: number) => {
            return <ProductItem key={idx} data={product} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgriStore;
