import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    backgroundColor: COLOR,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 8,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FAFAFB',
  },
  searchIcon: {
    margin: 5,
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  filterText: {
    fontWeight: '500',
    fontSize: 16,
  },
  flatListContainer: {marginTop: 20, width: '100%', height: '100%'},
});
