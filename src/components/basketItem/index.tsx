import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {COLOR} from '../../constants/color';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {addToBasket, removeFromBasket} from '../../store/basket/basketSlice';

type Props = {
  item: {
    count: number;
    price: string;
    brand: string;
  };
};

const BasketItem = ({item}: Props) => {
  const dispatch = useAppDispatch();

  const onAddButtonPress = () => {
    dispatch(addToBasket(item));
  };
  const removeButtonPress = () => {
    dispatch(removeFromBasket(item.brand));
  };

  return (
    <>
      <View
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={[styles.brandText, {color: 'black'}]}>{item.brand}</Text>
          <Text style={styles.price}>
            {item.count * parseFloat(item.price)}TL
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => removeButtonPress()}
            style={[styles.button, {backgroundColor: '#F3F4F6'}]}>
            <Text>-</Text>
          </TouchableOpacity>
          <View style={[styles.button, {backgroundColor: COLOR}]}>
            <Text style={[styles.brandText, {color: '#fff'}]}>
              {item.count}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => onAddButtonPress()}
            style={[styles.button, {backgroundColor: '#F3F4F6'}]}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BasketItem;
