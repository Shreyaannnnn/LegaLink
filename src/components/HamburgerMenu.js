// components/HamburgerMenu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const HamburgerMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={30} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerMenu;
