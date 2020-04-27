/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import logo from '../../assets/images/logo.png';
import backgroundMenu from '../../assets/images/backgroundMenu.jpg';
import {useSelector, useDispatch} from 'react-redux';
import * as loginAction from '../../store/actions/login';
import IconMCA from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Background} from './styles';

export default function drawerMenu(props) {
  const stateUserData = useSelector((state) => {
    return state.userData;
  });

  const dispatch = useDispatch();

  const logogff = () => {
    dispatch(loginAction.logoff());
  };

  return (
    <View style={{flex: 1}}>
      <Background source={backgroundMenu} imageStyle={{opacity: 0.5}}>
        <Image style={{height: 50, width: 50}} source={logo} />
        <Text style={{fontWeight: 'bold', marginLeft: 8}}>
          {stateUserData.name === '' ? 'Não informado' : stateUserData.name}
        </Text>
      </Background>
      <View style={{marginTop: -4}}>
        <DrawerNavigatorItems {...props} />
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableHighlight underlayColor="#aaa" onPress={logogff}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              borderTopColor: '#eeeeee',
              borderTopWidth: 1,
            }}>
            <IconMCA name="logout" size={18} color="#f45b69" />
            <Text
              style={{
                padding: 16,
                fontWeight: 'bold',
                color: '#f45b69',
              }}>
              Logout
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
