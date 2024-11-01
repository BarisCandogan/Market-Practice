import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Products} from '../../models/products';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {addFavorite, removeFavorite} from '../../store/favorites/favoriteSlice';
import Header from '../header';
import {addToBasket} from '../../store/basket/basketSlice';
import {COLOR} from '../../constants/color';

type Props = {
  productData: Products;
  setVisible: (value: boolean) => void;
  visible: boolean;
};

const ProductDetail = ({productData, setVisible, visible}: Props) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(
    state => state.favorite.favoriteProducts,
  );

  const onAddButtonPress = () => {
    setVisible(false);
    dispatch(
      addToBasket({
        brand: productData.brand,
        price: productData.price,
      }),
    );
  };

  const handleFavoriteToggle = () => {
    const isFavorite = favoriteProducts.some(fav => fav.id === productData.id);
    if (isFavorite) {
      dispatch(removeFavorite(productData.id));
    } else {
      dispatch(addFavorite(productData));
    }
  };

  return (
    <>
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={{backgroundColor: COLOR}} />
        <Header productBrand={productData.brand} setVisible={setVisible} />
        <View style={styles.container}>
          <ImageBackground
            source={{uri: productData.image}}
            style={styles.image}>
            <TouchableOpacity onPress={() => handleFavoriteToggle()}>
              <Image
                style={[
                  styles.favoriteIcon,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    tintColor: favoriteProducts.some(
                      fav => fav.id === productData.id,
                    )
                      ? 'orange'
                      : '#fff',
                  },
                ]}
                source={
                  favoriteProducts.some(fav => fav.id === productData.id)
                    ? require('../../assets/images/favorited.png')
                    : require('../../assets/images/favorite.png')
                }
              />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.title}>{productData.brand}</Text>
          <Text style={styles.description}>{productData.description}</Text>
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.priceText}>Price:</Text>
              <Text style={styles.price}>{productData.price}TL</Text>
            </View>
            <TouchableOpacity
              onPress={() => onAddButtonPress()}
              style={styles.addButton}>
              <Text style={styles.cartText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductDetail;
