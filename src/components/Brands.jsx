import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

export default function Brands() {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Brnads Of Day</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.brands}>
          <Image style={styles.imgStyle} source={Brand1} />
          <Text style={styles.brandTitle}>
            Min. 40% | Fossil , Titan Smart Watch More
          </Text>
        </View>
        <View style={styles.brands}>
          <Image style={styles.imgStyle} source={Brand2} />
          <Text style={styles.brandTitle}>
            Min. 20% | Fossil , Titan Smart Watch More
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.brands}>
          <Image style={styles.imgStyle} source={Brand3} />
          <Text style={styles.brandTitle}>
            Heels. 50% | Fossil , Titan Smart Watch More
          </Text>
        </View>
        <View style={styles.brands}>
          <Image style={styles.imgStyle} source={Brand4} />
          <Text style={styles.brandTitle}>
            Sony 70% | Fossil , Titan Smart Watch More
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  innercontainer: {},
  title: {
    fontSize: 18,
    color: '#000000',
    padding: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  brands: {
    width: '50%',
    padding: 10,
  },
  imgStyle: {
    height: 150,
    width: '100%',
  },
  brandTitle: {color: '#000000', fontSize: 13, marginTop: 5},
});
