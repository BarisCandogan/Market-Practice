import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    textTransform: 'capitalize',
    color: COLOR,
    fontSize: 30,
    fontWeight: '600',
  },
  flatListContainer: {marginTop: 20, width: '100%'},
  brandText: {
    fontSize: 20,
  },
  price: {color: COLOR},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 50,
  },
});
