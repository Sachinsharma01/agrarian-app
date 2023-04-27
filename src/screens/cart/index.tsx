import {View, Text} from 'react-native';
import React from 'react';
import EmptyCart from '../../assets/screens/empty_cart.svg';

const Cart = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
        <EmptyCart height={300} width={300} />
      </Text>
    </View>
  );
};

export default Cart;
