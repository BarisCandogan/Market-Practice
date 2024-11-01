import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    alignItems: 'flex-end',
  },
  favoriteIcon: {
    margin: 10,
    width: 25,
    height: 25,
  },
  cartText: {fontWeight: '300', color: '#fff', fontSize: 16},
  addButton: {
    backgroundColor: COLOR,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
