import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Onboard = ({ navigation }) => {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: ('100 %') }}>
            <Text style={{ paddingBottom: ('25%') }}>Login to Continue</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')} ><Text>Signup</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')} ><Text>login</Text></TouchableOpacity>
        </View>
    )
}

export default Onboard
const styles = StyleSheet.create({
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
})