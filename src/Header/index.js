import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../img/logo.png')}
         style={styles.logo}
      />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image 
        source={require('../img/send.png')}
        style={styles.send}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft:15,
    paddingRight: 15,
    backgroundColor: '#fff',
    height: 55,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1

  },
  logo:{

  },
  send:{
    width:23,
    height: 23
  }
});
