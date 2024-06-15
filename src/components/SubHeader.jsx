import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

export default function SubHeader() {
  return (
    <LinearGradient style = {styles.container} colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
      <Feather name="map-pin" size={18} color={'#0000000'} />
      <Text style={{fontWeight: 'bold', color:"#2c4341", paddingHorizontal:6 }}>Delive To Turkey - 2323344</Text>
      <SimpleLineIcons
        style={{fontWeight: 'bold'}}
        name="arrow-down"
        color="#0000000" size={18}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
        padding:13,
        flexDirection:"row",alignItems:"center"
    }
})
