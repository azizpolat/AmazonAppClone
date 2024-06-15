import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Recoommed from '../assets/recommend.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Deels() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Deal For you</Text>
      <Image source={Recoommed} style={styles.imgStyle} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 Off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.disPrice}>1,5999 ₺</Text>
          <Text style={styles.actualPrice}>1,9999 ₺</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin Type
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.detailSeeAll}>See al Deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imgStyle: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offDeal: {fontSize: 12, color: '#fff'},
  deal: {color: '#be0201', fontWeight: '600', marginLeft: 6, fontSize: 12},
  offDealBtn: {
    backgroundColor: '#be0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  disPrice: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: '#000000',
    fontSize: 14,
  },
  detailSeeAll: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 14,
  },
});
