import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function NavigationScreen () {
    const navigation = useNavigation();

    const handleChatScreenPress = () => {
        navigation.navigate('ChatScreen');
    };

    const handleChatsTabScreenPress = () => {
        navigation.navigate('ChatsTabScreen');
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={handleChatScreenPress}>
                    <Text style={styles.button}>Chat Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleChatsTabScreenPress}>
                    <Text style={styles.button}>Chats Tab Screen</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },

    button: {
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: '800',
        padding: 10,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#cccccc'
    },
});
