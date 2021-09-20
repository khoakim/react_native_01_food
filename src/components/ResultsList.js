import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({title,results}) => {
    return <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <FlatList 
        horizontal
        keyExtractor={result=>result.id}
        showsHorizontalScrollIndicator={false}
        data={results}
        // imagine that this renderItem will be called multiple times each time an object is passed in
        // the argument passed to renderItem will of the form { item : {<a result object>}, index}
        // we are only interested in 'item' 
        renderItem={({item})=>{
            // return <Text>{item.name}</Text>
            return <ResultDetails result={item}/>
        }}
    />
    </View>
};

const styles = StyleSheet.create({
    titleStyle : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft:10,
        marginBottom:5
    },
    container : {
        marginBottom:10
    }
});

export default ResultsList;