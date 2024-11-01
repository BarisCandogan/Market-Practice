import {View, SafeAreaView, FlatList, Text} from 'react-native';
import {styles} from './style';
import {useAppSelector} from '../../hooks/reduxHooks';
import Product from '../../components/product';
import Header from '../../components/header';
import {useEffect, useMemo} from 'react';
import {COLOR} from '../../constants/color';
import BasketItem from '../../components/basketItem';

const Basket = () => {
  const basketProducts = useAppSelector(state => state.basket.basketProducts);

  const totalPrice = useMemo(() => {
    return basketProducts.reduce((total, item) => {
      return total + parseFloat(item.price) * item.count;
    }, 0);
  }, [basketProducts]);

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLOR}} />
      <Header onlyTitle={true} />
      {basketProducts.length === 0 ? (
        <>
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>your basket is empty</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              style={styles.flatListContainer}
              data={basketProducts}
              renderItem={({item}) => <BasketItem item={item} />}
              initialNumToRender={12}
              onEndReachedThreshold={0.5}
            />
          </View>
          <View style={styles.summaryContainer}>
            <View>
              <Text style={{color: COLOR, fontSize: 20, fontWeight: '300'}}>
                Total:
              </Text>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
                {totalPrice.toFixed(2)}TL
              </Text>
            </View>
            <View style={styles.completeButton}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                Complete
              </Text>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Basket;
