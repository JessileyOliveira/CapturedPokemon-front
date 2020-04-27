import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from '../pages/Login';
import Pokemon from '../pages/Pokemon';
import DraweMenu from './DrawerMenu';
import React from 'react';
import IconMCA from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Routes = (userLogged = null) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: {
          screen: Login,
        },
        HomeScreen: createDrawerNavigator(
          {
            Pokemon: {
              screen: Pokemon,
              navigationOptions: {
                drawerLabel: 'Pokemons',
                drawerIcon: ({tintColor}) => (
                  <IconMCA name="login" size={18} color={tintColor} />
                ),
              },
            },
          },
          {
            initialRouteName: 'Pokemon',
            drawerPosition: 'left',
            contentComponent: DraweMenu,
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'HomeScreen' : 'Login',
      },
    ),
  );

export default Routes;
