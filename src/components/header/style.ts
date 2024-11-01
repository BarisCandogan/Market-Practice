import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR,
    paddingHorizontal: 10,
  },
  backIcon: {
    marginRight: 30,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
