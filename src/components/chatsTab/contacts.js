import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatsTab from '.';
import { useNavigation } from '@react-navigation/native';

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
        lastMessageTime: '23:30 ',
        unreadMessages: 1,
    },
    {
        id: '4',
        profileImage: require('../../assets/luffy.png'),
        username: 'Monkey D. Luffy',
        lastMessage: 'fala chifrudo, como tá?',
        lastMessageTime: '12:45 ',
        unreadMessages: 2,
    },
    {
        id: '5',
        profileImage: require('../../assets/zoro.png'),
        username: 'Roronoa Zoro',
        lastMessage: 'melhor coisa é ver sua mulher de babydoll man',
        lastMessageTime: '11:38 ',
        unreadMessages: 5,
    },
    {
        id: '6',
        profileImage: require('../../assets/sanji.png'),
        username: 'Vinsmoke Sanji',
        lastMessage: 'oi gostosa, solteira?',
        lastMessageTime: '23:30 ',
        unreadMessages: 1,
    },
    {
        id: '7',
        profileImage: require('../../assets/luffy.png'),
        username: 'Monkey D. Luffy',
        lastMessage: 'fala chifrudo, como tá?',
        lastMessageTime: '12:45 ',
        unreadMessages: 2,
    },
    {
        id: '8',
        profileImage: require('../../assets/zoro.png'),
        username: 'Roronoa Zoro',
        lastMessage: 'melhor coisa é ver sua mulher de babydoll man',
        lastMessageTime: '11:38 ',
        unreadMessages: 5,
    },
    {
        id: '9',
        profileImage: require('../../assets/sanji.png'),
        username: 'Vinsmoke Sanji',
        lastMessage: 'oi gostosa, solteira?',
        lastMessageTime: '23:30 ',
        unreadMessages: 1,
    },
    {
        id: '10',
        profileImage: require('../../assets/luffy.png'),
        username: 'Monkey D. Luffy',
        lastMessage: 'fala chifrudo, como tá?',
        lastMessageTime: '12:45 ',
        unreadMessages: 2,
    },
    {
        id: '11',
        profileImage: require('../../assets/zoro.png'),
        username: 'Roronoa Zoro',
        lastMessage: 'melhor coisa é ver sua mulher de babydoll man',
        lastMessageTime: '11:38 ',
        unreadMessages: 5,
    },
    {
        id: '12',
        profileImage: require('../../assets/sanji.png'),
        username: 'Vinsmoke Sanji',
        lastMessage: 'oi gostosa, solteira?',
        lastMessageTime: '23:30 ',
        unreadMessages: 1,
    },
];

const ContactList = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container} onPress={() => {navigation.navigate('ChatScreen')}}>
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
