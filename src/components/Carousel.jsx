import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

export default function Carousel() {
  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}>
        {CarouselData.map((item, image) => (
          <View>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  image: {
    height: 250,
    width: '100%',
  },
  container: {
    position: 'relative',
  },
});
