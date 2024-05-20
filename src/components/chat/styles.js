import { StyleSheet }from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    bubbleContainer: {
        maxWidth: '80%',
        padding: 8,
        paddingBottom: 9,
        paddingLeft: 10,
        marginVertical: 3,
        borderRadius: 15,
    },
    leftBubble: {
        marginLeft: 20,
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
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginRight: 10,
        maxHeight: 100,
        fontSize: 16
    },
    sendButton: {
        backgroundColor: 'transparent',
        padding: 7,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonIcon: {
        marginRight: 3,
        marginTop: 3
    }
})

export default styles;