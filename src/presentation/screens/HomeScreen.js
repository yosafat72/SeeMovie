import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import AutoImageSlider from '../components/AutoImageSlider';
import { INDEPENDENCE, SPACE_CADET } from '../../../assets/Color';

const { width } = Dimensions.get('window');

const images = [
    require('../../../assets/img/banner1.jpeg'),
    require('../../../assets/img/banner2.jpeg'),
    require('../../../assets/img/banner3.jpeg'),
    require('../../../assets/img/banner4.jpeg'),
    require('../../../assets/img/banner5.jpeg')
];

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <AutoImageSlider images={images} timer={5000}/>
        <View style={styles.promoView}>
          <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: SPACE_CADET}}>Movie DB Food</Text>
              <Image source={require('../../../assets/img/new.png')} style={{ width: 22, height: 22, marginLeft: 5}} resizeMode={'stretch'} />
          </View>
          <Text style={{fontSize: 12, marginTop: 5, color: INDEPENDENCE}}>Nonton lebih asik bareng cemilan favoritmu. Pesannya lebih mudah pake TIX Food!</Text>
          <Image source={require('../../../assets/img/promo.png')} style={{ width: '100%', height: 100, marginTop: 15, borderRadius: 15}} resizeMode={'stretch'} />
        </View>
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOpt

const styles = StyleSheet.create({
    container: {
    },
    promoView: {
        padding: 20
    }
  });
  

export default HomeScreen;