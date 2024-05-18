import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ChatsTab = ({
    profileImage,
    username,
    lastMessage,
    lastMessageTime,
    unreadMessages
}) => {
    return (
        <TouchableOpacity onPress={() => { }}>
        <View style={styles.container}>
            <Image source={profileImage } style={styles.profileImage} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text
                    style={styles.lastMessage}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    {lastMessage}
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.lastMessageTime}>{lastMessageTime}</Text>
                {unreadMessages > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>{unreadMessages}</Text>
                    </View>
                )}
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default ChatsTab;
