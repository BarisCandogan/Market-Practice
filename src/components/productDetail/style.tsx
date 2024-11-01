import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  image: {
    alignItems: 'flex-end',
    resizeMode: 'contain',
    flex: 0.5,
    marginVertical: 20,
  },
  price: {fontWeight: 'bold', fontSize: 20},
  cartText: {fontWeight: 'bold', color: '#fff', fontSize: 16},
  favoriteIcon: {
    margin: 15,
    width: 35,
    height: 35,
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    textAlign: 'justify',
  },
  priceContainer: {
    flexDirection: 'row',
    flex: 0.35,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceText: {
    color: COLOR,
    fontWeight: '300',
    fontSize: 20,
  },
  addButton: {
    backgroundColor: COLOR,
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
