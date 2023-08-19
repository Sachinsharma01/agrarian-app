import {SafeAreaView, ScrollView, View, FlatList} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/getDimensions';
import products from '../../assets/products';
import ProductItem from '../../components/product/ProductItem';

const AgriStore = () => {
  return (
    <SafeAreaView>
      <FlatList   
        numColumns={2}
        data={products}
        renderItem={product => <ProductItem data={product} />}
        keyExtractor={(product: any) => product.id}
      />
    </SafeAreaView>
  );
};

export default AgriStore;
