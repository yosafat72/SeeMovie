import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import AutoImageSlider from '../components/AutoImageSlider';
import { INDEPENDENCE, SPACE_CADET } from '../../../assets/Color';
import HomePromoComponent from '../components/home/PromoComponent';
import NowPlayingComponent from '../components/home/NowPlayingComponent';

const HomeScreen = () => {

  const { width } = Dimensions.get('window');

  const images = [
    require('../../../assets/img/banner1.jpeg'),
    require('../../../assets/img/banner2.jpeg'),
    require('../../../assets/img/banner3.jpeg'),
    require('../../../assets/img/banner4.jpeg'),
    require('../../../assets/img/banner5.jpeg')
];

  const movies = [
    require('../../../assets/img/movie1.jpeg'),
    require('../../../assets/img/movie2.jpeg'),
    require('../../../assets/img/movie3.jpeg'),
  ];

  return (
    <ScrollView>
      <View>
        <AutoImageSlider images={images} timer={5000}/>
        <HomePromoComponent/>
        <NowPlayingComponent data={movies}/>
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOpt

const styles = StyleSheet.create({
    container: {
    },
  });
  

export default HomeScreen;