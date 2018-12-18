import React from 'react';
import { Main } from './src/containers';
import { Container, Header, Body } from 'native-base';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Constants } from 'expo';
import AppRoutes from './src/routes';


export default class App extends React.Component {
  render() {

    return (
      <Container style={styles.container}>
        <AppRoutes />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: Constants.statusBarHeight,
    flex: 1,
  }
});
