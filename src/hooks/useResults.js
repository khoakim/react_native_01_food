import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

export default () => {
    const [results, setResults]=useState([]);
    const [error, setError]=useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params : {
                    limit : 50,
                    // term: term
                    // term,
                    term: searchTerm,
                    location: 'san joses'
                }
            });
            setResults(response.data.businesses);
            // ==> will get back response.data
        } catch (err) {
            setError(err);
        }


    }

    // useEffect with second argument empty array means this will run once at render
    useEffect( () => {
        searchApi('pasta');
    },[]);

    return [searchApi,results,error];
}