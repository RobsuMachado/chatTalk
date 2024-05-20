import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: '#777',
    },
    infoContainer: {
        alignItems: 'flex-end',
    },
    lastMessageTime: {
        fontSize: 12,
        color: '#999',
    },
    unreadBadge: {
        backgroundColor: '#00b2ff',
        borderRadius: 20,
        width: 20,
        height: 20,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unreadText: {
        color: 'white',
        fontSize: 12,
    },
});

export default styles;