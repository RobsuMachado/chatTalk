import { StyleSheet }from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    bubbleContainer: {
        maxWidth: '80%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    leftBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#999999',
    },
    rightBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#02bbff',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginRight: 10,
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: '#02bbff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        display: 'flex'
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default styles;