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

    const handleCamScreenPress = () => {
        navigation.navigate('CamScreen');
    };
    
    const handleProScheduleScreenPress = () => {
        navigation.navigate('ProScheduleScreen');
    };

    const handlePatScheduleScreenPress = () => {
        navigation.navigate('PatScheduleScreen');
    };

    const handlescheludePress = () => {
        navigation.navigate('schelude');
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

                <TouchableOpacity onPress={handleProScheduleScreenPress}>
                    <Text style={styles.button}>Professinal Schedule Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePatScheduleScreenPress}>
                    <Text style={styles.button}>Patient Schedule Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlescheludePress}>
                    <Text style={styles.button}>schelude</Text>
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