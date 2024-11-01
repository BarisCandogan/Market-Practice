import React, {useMemo} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeIcon from '../../assets/images/home.png';
import basketIcon from '../../assets/images/basket.png';
import favoriteIcon from '../../assets/images/favorite.png';
import profileIcon from '../../assets/images/profile.png';
import Home from '../../screen/home';
import Basket from '../../screen/basket/basket';
import Favorite from '../../screen/favorite';
import Profile from '../../screen/profile';
import {useAppSelector} from '../../hooks/reduxHooks';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const basketProducts = useAppSelector(state => state.basket.basketProducts);

  const basketLength = useMemo(() => {
    return basketProducts.reduce((acc, product) => acc + product.count, 0);
  }, [basketProducts]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = homeIcon;
          } else if (route.name === 'Basket') {
            iconName = basketIcon;
          } else if (route.name === 'Favorite') {
            iconName = favoriteIcon;
          } else if (route.name === 'Profile') {
            iconName = profileIcon;
          }

          return (
            <Image
              source={iconName}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? 'black' : 'grey',
              }}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarLabelStyle: {fontSize: 9, fontWeight: '700'},
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Basket"
        options={{
          tabBarBadge: basketLength,
        }}
        component={Basket}
      />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    borderLeftWidth: 0.2,
    paddingHorizontal: 20,
    borderRightWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 11.0,
    elevation: 24,
  },
});
