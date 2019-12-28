import React from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>SEU NOME </Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>SEU E-MAIL </Text>
        <TextInput
          style={styles.input}
          placeholder="Seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        < TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,

  },
  input: {
    borderBottomColor: '#111',
    borderWidth: 1,
    borderColor: '#111',
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#fff',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: '#334',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

})