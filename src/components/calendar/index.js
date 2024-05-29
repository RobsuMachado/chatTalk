import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image } from 'react-native'
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Feather } from '@expo/vector-icons';

export default function calendars() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Consulta</Text>
            <TouchableOpacity><Text>Agendar</Text></TouchableOpacity> */}
                <Calendar style={styles.calender}
                    theme={{
                        monthTextColor: '#00b2ff',
                        textMonthFontSize: 30,
                        textMouthFontWeight: '800',
                        arrowColor: '#00b2ff',
                        calendarBackground: 'trasparent',
                        textSectionTitleColor: '#00b2ff',
                        textDayFontWeight: '800',
                    }}
                />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calender: {
        backgroundColor: '#f8f8f8',
        borderWidth: 2,
        borderColor: '#00b2ff',
        borderRadius: 30,
        width: 350,
        paddingBottom: 8
    }

})
