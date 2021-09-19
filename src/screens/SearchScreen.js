import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term,setTerm] = useState("");
    const [searchcApi,results,error]=useResults();
    return <View style={styles.background}>
    <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmmit={()=>searchApi(term)}/>
    {error.length>0?<Text>{error}</Text>:null}
    <Text>we have found {results.length}</Text>
    </View>
};

const styles=StyleSheet.create({
    background : {
        backgroundColor:'white'
    }
});

export default SearchScreen;