

import React, { useEffect, useRef, useState } from 'react';
import { View, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AutoImageSlider = ({images, timer}) => {
    const flatListRef = useRef(null);
    const currentIndexRef = useRef(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const nextIndex = (currentIndexRef.current + 1) % images.length;
        flatListRef.current.scrollToIndex({
          animated: true,
          index: nextIndex,
          viewOffset: 0,
          viewPosition: 0.5,
        });
        currentIndexRef.current = nextIndex;
      }, timer);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const renderImage = ({ item }) => (
      <View style={{ flex: 1 }}>
        <Image source={item} style={{ width: width, height: 150}} resizeMode="contain" />
      </View>
    );
  
    const handleMomentumScrollEnd = (event) => {
      const contentOffset = event.nativeEvent.contentOffset;
      const viewSize = event.nativeEvent.layoutMeasurement;
      const pageNum = Math.floor(contentOffset.x / viewSize.width);
  
      if (pageNum === images.length - 1) {
        setTimeout(() => {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: 0,
          });
          currentIndexRef.current = 0;
        }, timer);
      }
    };
  
    return (
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderImage}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
    );
  };
  
  export default AutoImageSlider;