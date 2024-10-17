/*import React, { useState, useEffect, useCallback, useContext } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';
import { api } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { propsUserProfile } from './tenantUser/AnoterUserProfile';
import { AxiosError } from 'axios';

export function ChatScreen() {
    const route = useRoute();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [chatId, setChatId] = useState<number | null>(null);
    const authContext = useContext(AuthContext);
    const senderId = authContext?.user?.id;
    const { userId, photo, name, gender, city, aboutMe } = route.params as propsUserProfile;

    useEffect(() => {
        getChat();
    }, []);

    async function getChat() {
        try {
            const res = await api.post('/getChat', { userId1: senderId, userId2: userId });
            setChatId(res.data.chat.id);
            const chatMessages = res.data.chat.messages.map((message: any) => ({
                _id: message.id,
                text: message.content,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.senderId,
                    name: message.senderId === senderId ? 'Você' : name,
                    avatar: message.senderId === senderId ? 'sua-url-avatar' : photo,
                },
            }));
            setMessages(chatMessages);
        } catch (error: any) {
            const data = {userIds: [senderId, userId]}
            try{
                const res = await api.post('/chat', data);
                setChatId(res.data.chat.id);
            } catch(error){
                console.log(error)
            }
        }
    }

    async function sendMessage(content: string) {
        const data = { chatId, senderId, content }
        try {
            await api.post('/message', data);
        } catch (error: any) {
            console.error(error.response.data);
        }
    }

    const onSend = useCallback((newMessages: IMessage[] = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages),
        );
        sendMessage(newMessages[0].text);
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: senderId ?? 0,
            }}
            inverted={false}
        />
    );
}
*/

import { View, Text } from "react-native";

export function ChatScreen() {
    return (
        <View>
            <Text>ChatScreen</Text>
        </View>
    )
}
