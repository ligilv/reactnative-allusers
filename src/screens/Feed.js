import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import axios from 'axios'
const Feed = ({ navigation }) => {
    const [datas, setData] = useState()
    const [ismounted, setMount] = useState(true)
    const signout = () => {
        navigation.navigate('onboard')
        ToastAndroid.show('Signed out', ToastAndroid.SHORT)

    }
    useEffect(() => {
        axios.get('http://10.0.2.2:5000/api/users/getusers').then((response) => {

            if (ismounted) {
                setData(response.data)
            }
            return setMount(false)
        }, [])
    })
    return (
        <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={styles.button} onPress={signout} ><Text>Signout</Text></TouchableOpacity>
            <FlatList
                style={{ width: ('100%') }}
                data={datas}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text>{item.username}</Text>
                        <Text>{item.email}</Text>
                    </View>
                )}

            />
        </View>
    )
}

export default Feed
const styles = StyleSheet.create({
    container: {
        width: ('100%'),
        borderRadius: 10,
        backgroundColor: 'rgba(118, 200, 227, 0.8)',
        marginBottom: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'lightblue',
        borderColor: 'black',
        width: ('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        height: 40,
        borderRadius: 10

    }
})