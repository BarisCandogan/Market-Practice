import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import {Products} from '../../models/products';
import {useState} from 'react';
import React from 'react';

type Props = {
  setData: (value: Products[]) => void;
  data: Products[];
  filterProducts: Products[] | undefined;
  setSelectedBrand: (value: string | null) => void;
  setModalVisible: (value: boolean) => void;
  modalVisible: boolean;
  selectedBrand: string | null;
};

const FilterModal = ({
  setData,
  data,
  filterProducts,
  selectedBrand,
  setSelectedBrand,
  setModalVisible,
  modalVisible,
}: Props) => {
  const [radioButtonPressed, setRadioButtonPressed] = useState(0);

  const sortByPriceAscending = () => {
    setRadioButtonPressed(2);
    setSelectedBrand(null);
    const sortedData: any = [...data].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price),
    );
    setData(sortedData);
  };

  const sortByPriceDescending = () => {
    setRadioButtonPressed(1);
    setSelectedBrand(null);
    const sortedData: any = [...data].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price),
    );
    setData(sortedData);
  };

  const filterByBrand = (brand: string) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <SafeAreaView />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Filter</Text>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => setModalVisible(false)}>
                  <Text style={{fontSize: 25}}>X</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                showsVerticalScrollIndicator={true}
                style={styles.flatlist}
                onEndReachedThreshold={0.5}
                data={filterProducts}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      style={styles.chooseContainer}
                      onPress={() => filterByBrand(item.brand)}>
                      <View style={styles.checkBox}>
                        {selectedBrand === item.brand ? (
                          <View style={styles.checkboxChosed}></View>
                        ) : null}
                      </View>
                      <Text>{item.brand}</Text>
                    </TouchableOpacity>
                  </>
                )}
              />
              <Text style={{marginVertical: 10}}>Sort By</Text>
              <TouchableOpacity
                onPress={sortByPriceDescending}
                style={styles.row}>
                <View style={styles.radioButton}>
                  {radioButtonPressed === 1 ? (
                    <View style={styles.chosed}></View>
                  ) : null}
                </View>
                <Text style={styles.modalText}>En Yüksek fiyatlar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={sortByPriceAscending}
                style={styles.row}>
                <View style={styles.radioButton}>
                  {radioButtonPressed === 2 ? (
                    <View style={styles.chosed}></View>
                  ) : null}
                </View>
                <Text style={styles.modalText}>En Düşük fiyatlar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default FilterModal;
