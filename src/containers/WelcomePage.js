import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import { LoginForm } from '../components';

const remote = 'https://i.pinimg.com/236x/fc/31/f4/fc31f4d99b85b03089ca01769ec8a6f0--iphone-se.jpg';

export default class WelcomePage extends React.Component {

  render() {
    return (
      <ImageBackground  style={{ height : '100%' , width : '100%'}} source={{ uri: remote }}>
        <TouchableOpacity style={styles.container} onPress={() => this.props.history.push('/login')}>
          <Text style={styles.wcText}>Welcome!</Text>
          <Text style={styles.title}>-R-N-B-P-</Text>
          <Text style={styles.subtitle}> - React - Native - Base - Practice - </Text>
          <Text style={{ color: '#fff', paddingTop: 150, fontSize: 10, textAlign: 'center' }}>Tap to continue...</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 160,
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
    paddingTop: 30,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
  },
  bgImg: {
    backgroundColor: 'orange',
    width: '100%',
    height: '100%'
  },
  wcText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  wcDesc: {
    color: '#fff',
    textAlign: 'center'
  }
})
