import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { View, Text, TouchableOpacity } from 'react-native'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import axios from 'axios'


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginStack = createStackNavigator()
    checkSignin = () => {
        axios.post('http://10.0.2.2:5000/api/users/signin', {
            password, email
        }).then(res => {
            console.log(res)
            if (res.data.loggedin) {
                navigation.navigate('Feed')
                setPassword('')
                ToastAndroid.show("Loggedin", ToastAndroid.SHORT);
            }
            else
                ToastAndroid.show("Wrong details", ToastAndroid.SHORT);


        })

    }

    return (
        <View style={{ alignItems: 'center' }}>

            <Text style={{ paddingTop: 10 }}>Please enter email</Text>
            <TextInput placeholder='email please' keyboardType='email-address' style={styles.input} onChangeText={e => setEmail(e)}></TextInput>
            <Text>Please enter password</Text>
            <TextInput placeholder='password' style={styles.input} secureTextEntry={true} value={password} onChangeText={e => setPassword(e)}></TextInput>
            <TouchableOpacity style={{ backgroundColor: 'grey' }} onPress={checkSignin} style={styles.button}><Text>log me in</Text></TouchableOpacity>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: ('80%'),
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 15
    },
    button: {
        backgroundColor: 'lightblue',
        borderColor: 'black',
        width: ('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        height: 60,
        borderRadius: 10

    }
});
