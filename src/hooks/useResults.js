import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

export default () => {
    const [results, setResults]=useState([]);
    const [error, setError]=useState("");
    console.log(term);
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

    useEffect( () => {
        searchApi('pasta');
    },[]);

    return [searchApi,results,error];
}