import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { GOLD, SPACE_CADET } from "../../../assets/Color";

const MovieList = ({data}) => {

      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <View style={styles.cardFooter}>
            <Text style={styles.detailButtonText}>Detail Movie</Text>
          </View>
          <Image style={styles.cardItem} source={item} resizeMode="cover" />
        </View>
      );
    
      return (
        <View >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            horizontal
            scrollEnabled
          />
        </View>
      );
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 280,
    width: 175,
  },
  cardItem: {
    position: 'absolute',
    height: 250,
    width: 175,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20

  },
  cardFooter: {
    backgroundColor: SPACE_CADET, 
    height: '100%', 
    width: '100%',
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 6
  },
  detailButtonText: {
    color: GOLD,
    fontSize: 14,
    fontWeight: '500'
  }
});

export default MovieList;