import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { INDEPENDENCE, SPACE_CADET } from "../../../../assets/Color";
import OutlineRoundedButton from "../OutlineRoundedButton";
import { Ionicons } from '@expo/vector-icons';
import MovieList from "../MovieList";

const NowPlayingComponent = ({data}) => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                <Text style={styles.title}>Sedang Tayang</Text>
                <View style={{alignSelf: "center", flexDirection: "row", marginTop: 3}}>
                    <Text style={{fontSize: 12}}>Semua</Text>
                    <Ionicons name="ios-arrow-forward-circle" size={15} color="black" />
                </View>
            </View>
            <View style={{flex: 1, flexDirection: "row"}}>
                <OutlineRoundedButton title={'Semua Bioskop'}/>
                <OutlineRoundedButton title={'XXI'}/>
                <OutlineRoundedButton title={'CGV'}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <MovieList data={data}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        color: SPACE_CADET,
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export default NowPlayingComponent;