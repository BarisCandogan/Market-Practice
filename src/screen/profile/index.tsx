import {Text, View, SafeAreaView} from 'react-native';
import {styles} from './style';
import Header from '../../components/header';
import {COLOR} from '../../constants/color';

const Profile = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: COLOR}} />
      <Header onlyTitle={true} />
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </>
  );
};

export default Profile;
