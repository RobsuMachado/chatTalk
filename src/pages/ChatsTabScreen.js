import React from 'react';
import { SafeAreaView } from 'react-native';
import ContactList from '../components/contacts';

const ChatsTabScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ContactList />
        </SafeAreaView>
    );
};

export default ChatsTabScreen;
