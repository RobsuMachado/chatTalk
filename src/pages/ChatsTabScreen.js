import React, { useLayoutEffect, useState, useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContactList from '../components/contacts';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/searchBar';

export default function ChatsTabScreen() {
    const navigation = useNavigation();
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSearch = useCallback((query) => {
        // adicionar o codigo para buscar
        console.log('Search Query:', query);
    }, []);

    const handleCloseSearchBar = useCallback(() => {
        setSearchVisible(false);
        return false;
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Conversas',
            headerTitleStyle: { color: "#00b2ff" },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
                    <Feather
                        name='chevron-left'
                        size={25}
                        color={'#00b2ff'}
                        style={{ alignItems: 'flex-start', marginRight: 20 }}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    {!isSearchVisible && (
                        <TouchableOpacity onPress={() => setSearchVisible(true)}>
                            <Feather
                                name='search'
                                size={22}
                                color='#00b2ff'
                            />
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity>
                        <Feather
                            name='camera'
                            size={22}
                            color='#00b2ff'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather
                            name='more-vertical'
                            size={22}
                            color='#00b2ff'
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerShadowVisible: false,
        });
    }, [navigation, isSearchVisible]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isSearchVisible && (
                <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 10 }}>
                    <SearchBar onSearch={handleSearch} onClose={handleCloseSearchBar} />
                </View>
            )}
            <ContactList />
        </SafeAreaView>
    );
};
