import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatsTab from '../chatsTab';

const contacts = [
    {
        id: '1',
        profileImage: require('../../assets/luffy.png'),
        username: 'Monkey D. Luffy',
        lastMessage: 'fala chifrudo, como tá?',
        lastMessageTime: '12:45 ',
        unreadMessages: 2,
    },
    {
        id: '2',
        profileImage: require('../../assets/zoro.png'),
        username: 'Roronoa Zoro',
        lastMessage: 'melhor coisa é ver sua mulher de babydoll man',
        lastMessageTime: '11:38 ',
        unreadMessages: 5,
    },
    {
        id: '3',
        profileImage: require('../../assets/sanji.png'),
        username: 'Vinsmoke Sanji',
        lastMessage: 'oi gostosa, solteira?',
        lastMessageTime: '23:99 ',
        unreadMessages: 1,
    },
];

const ContactList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                    <ChatsTab
                        profileImage={item.profileImage}
                        username={item.username}
                        lastMessage={item.lastMessage}
                        lastMessageTime={item.lastMessageTime}
                        unreadMessages={item.unreadMessages}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listContent: {
        padding: 10,
    },
});

export default ContactList;
