import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import {useEffect, useState} from 'react';
import {Products} from '../../models/products';
import {fetchApi} from '../../api/api';
import Product from '../../components/product';
import FilterModal from '../../components/filterModal';
import {LogBox} from 'react-native';
import {COLOR} from '../../constants/color';
import Header from '../../components/header';

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Products[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<Products[]>();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [filterProducts, setFilterProducs] = useState<Products[]>();
  LogBox.ignoreAllLogs();

  const LIMIT = 12;

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchApi(page, LIMIT);
      if (data.length < LIMIT) {
        setHasMore(false);
      }
      if (filterProducts === undefined) {
        setFilterProducs(data);
      }
      setProducts(prevProducts => [...prevProducts, ...data]);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [page]);

  useEffect(() => {
    loadProducts;
  }, []);

  const loadMoreProducts = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  if (loading && products.length === 0) {
    return (
      <View
        style={[
          styles.container,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    if (text === '') {
      setFilteredData([]);
    } else {
      const filtered = products.filter(item =>
        item.brand.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const brandData =
    selectedBrand !== null
      ? products.filter(item => item.brand === selectedBrand)
      : [];

  console.log(selectedBrand, 'v');

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLOR}} />
      <View style={styles.container}>
        <Header onlyTitle={true} />
        <View style={{paddingHorizontal: 10}}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.searchIcon}
              source={require('../../assets/images/search.png')}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleSearch}
              placeholderTextColor={'grey'}
              placeholder="Search"
              value={searchTerm}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterText}>Filters :</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.filterButton}>
              <Text>Select Filter</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 5,
            }}>
            <FlatList
              numColumns={2}
              style={styles.flatListContainer}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={
                filteredData.length === 0
                  ? brandData.length === 0 && data === undefined
                    ? products
                    : brandData.length !== 0
                    ? brandData
                    : data
                  : filteredData
              }
              keyExtractor={item => item.id}
              renderItem={({item}) => <Product productData={item} />}
              initialNumToRender={12}
              onEndReached={loadMoreProducts}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : null
              }
            />
          </View>
        </View>
      </View>
      {modalVisible ? (
        <FilterModal
          selectedBrand={selectedBrand}
          setData={setData}
          filterProducts={filterProducts}
          setSelectedBrand={setSelectedBrand}
          data={products}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      ) : null}
    </>
  );
};

export default Home;
