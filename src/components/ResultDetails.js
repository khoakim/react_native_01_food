import React from "react";
import { View, Image, Text, StyleSheet} from 'react-native';

const ResultDetails = ({result}) => {
    return <View style={styles.container}>
    <Image style={styles.image} source={ {uri:result.image_url} }/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} reviews</Text>
    </View>
};

const styles=StyleSheet.create({
    container : {
        marginLeft:10
    },
    image : {
        width:250,
        borderRadius:4,
        height:120,
        marginBottom:5
    },
    name : {
        fontWeight:'bold',
        // fontSize:16
    }

});

export default ResultDetails;