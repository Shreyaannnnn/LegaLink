import React, { useLayoutEffect } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Case Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Registered Phone Number"
        />
        <TouchableOpacity
          style={[styles.otpButton, { backgroundColor: '#20263F' }]}
          onPress={() => { /* Handle Submit */ }}
        >
          <Text style={styles.otpButtonText}>Send OTP</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
        />
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: '#FFFFFF' }]}
          onPress={() => { navigation.navigate('Tracker') }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '40%', // Adjust to 40% of screen width
    height: '8%', // Adjust to 8% of screen height
    resizeMode: 'contain', // Maintain the aspect ratio
  },
  heading: {
    fontSize: 24,
    marginTop: 20,
  },
  form: {
    marginVertical:40,
    width: '90%',
    height:'65%',
    marginTop: 20,
    borderWidth:0.2,
    borderRadius:10,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-between',
  },
  input: {
    marginVertical:20,
    width:"80%",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  otpButton: {
    width: '45%', // Set the width of the button container to 35%
    height:"9%",
    alignSelf: 'center', // Center the button container horizontally
    borderRadius:14,
    justifyContent:'center',
    alignItems:'center',
    bottom:4
  },
  otpButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight:'bold'
  },

  submitButton: {
    width: '45%', // Set the width of the button container to 35%
    height:"9%",
    alignSelf: 'center', // Center the button container horizontally
    borderRadius:14,
    justifyContent:'center',
    alignItems:'center',
    bottom:4,
    borderColor:"#20263F",
    borderWidth:2,
    marginBottom:30
  },
  submitButtonText: {
    color: '#20263F',
    fontSize: 17,
    fontWeight:'bold'
  },
});

export default LoginScreen;
