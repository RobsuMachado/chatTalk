// ChatScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import useSocket from '../../utils/socketClientConfig'; // Importe o hook useSocket do arquivo socket.js
import { Feather, FontAwesome } from '@expo/vector-icons';

// Componente para exibir uma bolha de chat
const ChatBubble = ({ message, isRight }) => {
    return (
        <View style={[styles.bubbleContainer, isRight ? styles.rightBubble : styles.leftBubble]}>
            <Text style={styles.messageText}>{message}</Text>
        </View>
    );
};

// Componente para entrada de mensagem
const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    // Função para enviar mensagem
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
                placeholder="Mensagem"
                placeholderTextColor="#666"
                multiline={true}
            />

            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <View style={styles.sendButtonIcon}>
                    <Feather
                        name='send'
                        size={30}
                        color={'#00b2ff'}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

// Componente principal da tela de chat
const Chat = () => {
    const { socket, isInitialized } = useSocket();
    const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
    const flatListRef = useRef(); // Referência para o FlatList

    // Função para lidar com o envio de mensagem
    const handleSendMessage = (message) => {
        if (isInitialized) {
            setMessages([...messages, { text: message, isRight: true }]); // Adiciona a mensagem localmente
            socket.emit('message', message); // Envia a mensagem para o servidor
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };

    // Efeito para rolar automaticamente a lista para o final quando as mensagens mudam
    // useEffect(() => {
    //     if (flatListRef.current) {
    //         flatListRef.current.scrollToEnd({ animated: true });
    //     }
    // }, [messages]);

    return (
        <View style={styles.container}>
            {/* FlatList para exibir as mensagens */}
            <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={({ item }) => <ChatBubble message={item.text} isRight={item.isRight} />}
                keyExtractor={(item, index) => index.toString()}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
                onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
            />
            {/* Componente de entrada de mensagem */}
            <ChatInput onSendMessage={handleSendMessage} />
        </View>
    );
};

export default Chat;