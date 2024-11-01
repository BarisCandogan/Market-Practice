import {View, SafeAreaView, FlatList, Text} from 'react-native';
import {styles} from './style';
import {useAppSelector} from '../../hooks/reduxHooks';
import Product from '../../components/product';
import Header from '../../components/header';
import {COLOR} from '../../constants/color';

const Favorite = () => {
  const favoriteProducts = useAppSelector(
    state => state.favorite.favoriteProducts,
  );

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLOR}} />
      <Header onlyTitle={true} />
      <View style={styles.container}>
        {favoriteProducts.length === 0 ? (
          <Text style={styles.title}>
            you don't have a favorite product at the moment
          </Text>
        ) : (
          <>
            <Text style={styles.title}>Favorites</Text>
            <FlatList
              numColumns={2}
              style={styles.flatListContainer}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={favoriteProducts}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => <Product productData={item} />}
              initialNumToRender={12}
              onEndReachedThreshold={0.5}
            />
          </>
        )}
      </View>
    </>
  );
};

export default Favorite;
