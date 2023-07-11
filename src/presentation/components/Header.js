import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { INDEPENDENCE } from '../../../assets/Color';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={{flex: 1, height: '100%', flexDirection: 'row'}}>
            <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}} >
                <View style={{
                        flexDirection: 'row',
                        borderColor: '#DCDCDC',
                        borderWidth: 1,
                        borderRadius: 20,
                        backgroundColor: '#DCDCDC'
                    }}>
                    <Ionicons 
                        name="search" 
                        size={20}
                        color="black" 
                        style={{marginRight: 5, marginTop: 2, paddingLeft: 10}}/>
                    <TextInput 
                        placeholder='Cari di Movie DB' 
                        style={{
                            width: '80%',
                            padding: 5,
                        }}/>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="person-circle-outline" size={24} color="black" /> 
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="notifications-circle-outline" size={24} color="black" />
            </View>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 60 + (Platform.OS === 'ios' ? 30 : StatusBar.currentHeight),
      paddingTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 1,
    },
    title: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default Header;