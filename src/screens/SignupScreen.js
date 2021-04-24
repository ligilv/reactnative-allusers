import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import axios from 'axios'
const Signup = ({ navigation }) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        console.log(username);
        console.log(email);
        console.log(password);
    })
    checkSignup = () => {
        axios.post('http://10.0.2.2:5000/api/users/signup', {
            username, password, email
        }).then(res => {
            console.log(res)
            if (username && password && email) {
                if (res.data.usersaved) {
                    setUserName('');
                    setEmail('');
                    setPassword('')
                    navigation.navigate('login')

                    ToastAndroid.show("Sucessfully Signed up", ToastAndroid.SHORT);
                }
                else
                    ToastAndroid.show("User exists", ToastAndroid.SHORT);
                console.log("userexist")

            } else {
                ToastAndroid.show("Please fill the fields", ToastAndroid.SHORT);

            }



        })

    }
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Please enter name</Text>
            <TextInput placeholder='name please' style={styles.input} value={username} onChangeText={e => setUserName(e)}></TextInput>
            <Text>Please enter email</Text>
            <TextInput placeholder='email please' style={styles.input} value={email} onChangeText={e => setEmail(e)}></TextInput>
            <Text>Please enter password</Text>
            <TextInput placeholder='password' secureTextEntry={true} style={styles.input} value={password} onChangeText={e => setPassword(e)}></TextInput>
            <TouchableOpacity onPress={checkSignup} style={styles.button}><Text>Sign me up!</Text></TouchableOpacity>

        </View>
    )
}

export default Signup
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
