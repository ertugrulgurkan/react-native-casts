import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResulList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' ||'$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResulList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResulList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResulList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;