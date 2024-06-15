import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Deels from '../components/Deels';
import Brands from '../components/Brands';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Header />
        <SubHeader />
        <Category />
        <Carousel />
        <Services />
        <Deels />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
}
