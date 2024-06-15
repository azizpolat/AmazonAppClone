import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Prod1 from '../assets/prod1.png';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import PrimeLogo from '../assets/prime-logo.png';
import {ProductData} from '../data/ProductData';
import {getRating} from '../utils/helpers';

export default function ProductScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagLine}>
          Price and other Details mary many on product aside and Color{' '}
        </Text>
        {ProductData.map(item => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productSectionImg}>
              <Image source={item.image} style={styles.productImg} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productname}>{item.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                {/* <FontAwesome name="star" color="#ffa41c" size={10} /> getRatingden geldiği için buna gerek kalmadı*/}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>
              <View style={styles.priceAll}>
                <Text style={styles.price}>{item.price} ₺</Text>
                <Text style={styles.crosout}>{item.crossOutText} ₺</Text>
              </View>
              <Text style={styles.cashPay}>
                Up to 5% cashback with Amazon Pay Credit Card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.crosout}>
                {' '}
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagLine: {
    fontSize: 11,
    color: 'grey',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productSectionImg: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productImg: {width: '100%', height: 150, resizeMode: 'contain'},
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: '#000000',
  },
  productname: {fontSize: 12, color: '#000000', lineHeight: 18},
  ratingCount: {fontSize: 11, color: '#017185'},
  rating: {fontSize: 11, color: '#017185', marginRight: 5},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    color: '#000000',
    marginRight: 5,
  },
  crosout: {fontSize: 10, color: 'grey', textDecorationLine: 'line-through'},
  priceAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 2,
  },
  cashPay: {fontSize: 9, marginVertical: 3},
  logo: {
    height: 16,
    width: 43,
    marginVertical: 3,
  },
});
