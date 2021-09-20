import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmmit}) => {
    return <View style={styles.background}>
    <Feather name="search" style={styles.iconStyle}/>
    <TextInput 
        // Whenever we use TextInput, we want to use state variable to keep track of input
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="search"
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        // onEndEditing={()=>onTermSubmmit()}
        //short format: TextInput will "call" these functions directly and pass on whatever relevant parameters
        onChangeText={onTermChange}
        onEndEditing={onTermSubmmit}
        />
    </View>
};

const styles=StyleSheet.create({
    background: {
        // backgroundColor : '#F0EEEE',
        backgroundColor: 'white',
        height: 50,
        borderRadius : 5,
        marginHorizontal: 10,
        flexDirection : 'row',
        marginBottom:10
    },
    inputStyle : {
        fontSize: 18,
        // borderColor : 'black',
        // borderWidth  : 1,
        flex:1 //let inputStyle takes up as mmuch space as possible
    },

    iconStyle : {
        fontSize : 35,
        alignSelf:'center', // we want the input text box to take up as much as height as possible so the alignment is only on icon
        marginHorizontal: 15
    }
});

export default SearchBar;