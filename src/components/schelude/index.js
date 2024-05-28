import {StyleSheet, TouchableOpacity, SafeAreaView, Text} from 'react-native'
import React from 'react'
import { Agenda } from 'react-native-calendars'

export default function schelude() {
    return (
        <SafeAreaView style={styles.container}>
            <Text> robson </Text>
            <Agenda
                items={{
                    '2024-05-30': [{name: 'Meeting 1', time: '10:30', data: 'teu pai é corno'}],
                    '2024-05-30': [{name: 'Meeting 2', time: '10:31', data: 'teu pai é corno'}],
                    '2024-05-30': [{name: 'Meeting 3', time: '10:32', data: 'teu pai é corno'}],
                    '2024-05-31': [{name: 'Meeting 4', time: '10:33', data: 'teu pai é corno'}],
                    '2024-05-29': [{name: 'Meeting 5', time: '10:34', data: 'teu pai é corno'}],
                    '2024-05-28': [{name: 'Meeting 6', time: '10:35', data: 'teu pai é corno'}]
                }}
                renderItem={(item, isFirst) => (
                    <TouchableOpacity style={styles.item}>
                        <Text  style={styles.itemText}>{item.name}</Text>
                        <Text  style={styles.itemText}>{item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

})
