import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image } from 'react-native'
import React, { useState } from 'react';
import { Agenda, LocaleConfig } from 'react-native-calendars'
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr,', 'Mai,', 'Jun,', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Hoje"
};

LocaleConfig.defaultLocale = 'br';

export default function schelude() {
    const [selected, setSelected] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                items={{
                    '2024-05-27': [{ profileImage: require('../../assets/zoro.png'), username: 'Victor Bem-Gay', time: '10:30', data: 'Bate-Papo Semanal 😊' }],
                    '2024-05-28': [{ profileImage: require('../../assets/luffy.png'), username: 'Coutinho Dr.', time: '10:35', data: 'Papo sobre anciedade 😒' }],
                    '2024-05-29': [{ profileImage: require('../../assets/luffy.png'), username: 'Yasmin Mayume', time: '10:34', data: 'teu pai é corno.' }],
                    '2024-05-30': [{ profileImage: require('../../assets/zoro.png'), username: 'Pedro Pinkovay', time: '10:31', data: 'teu pai é corno.' }],
                    '2024-05-31': [{ profileImage: require('../../assets/luffy.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                    '2024-06-01': [{ profileImage: require('../../assets/luffy.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                    '2024-06-02': [{ profileImage: require('../../assets/sanji.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                    '2024-06-03': [{ profileImage: require('../../assets/luffy.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                    '2024-06-04': [{ profileImage: require('../../assets/luffy.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                    '2024-06-05': [{ profileImage: require('../../assets/sanji.png'), username: 'Robsus Robson', time: '10:33', data: 'teu pai é corno.' }],
                }}
                renderItem={(item, isFirst) => (
                    <View style={styles.item}>
                        <TouchableOpacity style={styles.itemTop}>
                            <Image source={item.profileImage} style={styles.profileImage} />
                            <Text style={styles.itemName}>{item.username}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.itemBottom}>
                            <Text style={styles.itemText}>{item.data}</Text>
                            <TouchableOpacity>
                                <Feather name='edit' size={20} color={'#666666'} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )}

                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: '#00b2ff' }
                }}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    item: {
        flex: 1,
        marginVertical: 10,
    },
    itemTop: {
        backgroundColor: '#00b2ff',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        paddingVertical: 12,
        paddingLeft: 20,
        paddingRight: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    itemBottom: {
        backgroundColor: '#ffffff',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingVertical: 12,
        paddingLeft: 20,
        paddingRight: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 18,
    },
    itemText: {
        color: '#333333',
        fontWeight: '500',
        fontSize: 16,
    }

})
