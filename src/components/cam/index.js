import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Cam } from 'expo-camera'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Camera () {
    const [type, setType] = useState(Cam.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.resquestPermissionAsync();
            setHasPermission(status === 'granted');
        });
    }, []);

    if(hasPermission === null ){
        return <View/>
    }

    if(hasPermission === false ){
        return <Text> Acesso negado!</Text>
    }

    return (
        <SafeAreaView>
            <Cam
                style={{ flex: 1 }}
                type={arguments}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})