import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar"
                value={query}
                onChangeText={setQuery}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.closeButton}>
                <Feather name="x" size={22}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        maxWidth: '100%',
        paddingHorizontal: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5
    },
    closeButton: {
    }
});

export default SearchBar;
