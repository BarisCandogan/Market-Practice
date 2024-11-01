import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    textTransform: 'capitalize',
    color: COLOR,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  flatListContainer: {marginTop: 20, width: '100%'},
});
