import React, { useLayoutEffect} from 'react';
import { SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import CalendarApp from '../components/schelude';

export default function PatScheduleScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Agendamento do Paciente',
            headerTitleStyle: { color: "#00b2ff" },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('NavigationScreen')}>
                    <Feather
                        name='chevron-left'
                        size={25}
                        color={'#00b2ff'}
                        style={{ alignItems: 'flex-start', marginRight: 20 }}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                    <TouchableOpacity>
                        <Feather
                            name='more-vertical'
                            size={22}
                            color='#00b2ff'
                        />
                    </TouchableOpacity>
            ),
            headerShadowVisible: false,
        });
    },
        <SafeAreaView>
            <CalendarApp/>
        </SafeAreaView>
    );
};
