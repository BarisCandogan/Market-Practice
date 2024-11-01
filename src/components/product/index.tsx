import {Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Products} from '../../models/products';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {useState} from 'react';
import {addFavorite, removeFavorite} from '../../store/favorites/favoriteSlice';
import ProductDetail from '../productDetail';
import {addToBasket} from '../../store/basket/basketSlice';

const Product = ({productData}: {productData: Products}) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(
    state => state.favorite.favoriteProducts,
  );

  const onAddButtonPress = () => {
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
      <TouchableOpacity
        onPress={() => setVisible(true)}
        key={productData.id}
        style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: productData.image}}>
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
        <Text>{productData.price}</Text>
        <Text>{productData.brand}</Text>
        <TouchableOpacity
          onPress={() => onAddButtonPress()}
          style={styles.addButton}>
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <ProductDetail
        productData={productData}
        setVisible={setVisible}
        visible={visible}
      />
    </>
  );
};

export default Product;
