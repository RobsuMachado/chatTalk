import React, { useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Chat from '../components/chat';

export default function ChatScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Chat',
            headerTitleStyle: ({ color: "#00b2ff" }),
            headerLeft: () => (
                <TouchableOpacity>
                    <Feather
                        name='chevron-left'
                        size={25}
                        color={'#00b2ff'}
                        style={{ alignItems: 'flex-start', marginRight: 20 }}
                        onPress={() => { navigation.navigate('ChatsTabScreen'); }}
                    />
                </TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 20 }}>
                    <TouchableOpacity>
                        <Feather
                            name='calendar'
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
                </View>),
            headerShadowVisible: false,
        });
    }, [navigation]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Chat />
        </SafeAreaView>
    );
};