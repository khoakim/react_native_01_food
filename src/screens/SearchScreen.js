import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term,setTerm] = useState("");
    const [searchApi,results,error]=useResults();

    // console.log(results);
    const filterResults = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (

    <>

    <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmmit={()=>searchApi(term)}/>
    {error.length>0?<Text>{error}</Text>:null}
    <ScrollView>
        <ResultsList results={filterResults('$')} title='Costs Effect'/>
        <ResultsList results={filterResults('$$')} title='Bit Pricier'/>
        <ResultsList results={filterResults('$$$')} title='Big Spender'/>
    </ScrollView>
    </>

    )
};

const styles=StyleSheet.create({
    background : {
        backgroundColor:'white',
        
        // Most of the time when content is out of view
        // For example, on small screen device
        // ====> flex :1 <=============
    }
});

export default SearchScreen;