import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textTransform: 'capitalize',
    color: COLOR,
    fontSize: 30,
    fontWeight: '600',
  },
  summaryContainer: {
    flex: 0.3,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 7,
    borderRadius: 5,
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
