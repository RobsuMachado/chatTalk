import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const ChatBubble = ({ message, isRight }) => {
    return (
        <View style={[styles.bubbleContainer, isRight ? styles.leftBubble : styles.leftBubble]}>
            <Text style={styles.messageText}>{message}</Text>
        </View>
    );
};

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Digite sua mensagem..."
                placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, isRight: true }]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <ChatBubble message={item.text} isRight={item.isRight} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <ChatInput onSendMessage={handleSendMessage} />
        </View>
    );
};

export default ChatScreen