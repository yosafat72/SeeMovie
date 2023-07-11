import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';
import { INDEPENDENCE, SPACE_CADET } from "../../../../assets/Color";

const HomePromoComponent = () => {
    return(
        <View style={styles.promoView}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: SPACE_CADET}}>Movie DB Food</Text>
                <Image source={require('../../../../assets/img/new.png')} style={{ width: 22, height: 22, marginLeft: 5}} resizeMode={'stretch'} />
            </View>
            <Text style={{fontSize: 12, marginTop: 5, color: INDEPENDENCE}}>Nonton lebih asik bareng cemilan favoritmu. Pesannya lebih mudah pake TIX Food!</Text>
            <Image source={require('../../../../assets/img/promo.png')} style={{ width: '100%', height: 100, marginTop: 15, borderRadius: 15}} resizeMode={'stretch'} />
        </View>
    )

}

const styles = StyleSheet.create({
    promoView: {
        padding: 20
    }
});

export default HomePromoComponent;