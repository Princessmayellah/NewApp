import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Recovery</Text>
      <Text style={styles.subheading}>Enter your email to reset password</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#606060',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FF5A5F',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  linkText: {
    color: '#FF5A5F',
    marginTop: 20,
    fontSize: 15,
  },
});
