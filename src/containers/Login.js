import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Container, Content } from 'native-base';
//import { LoginForm } from '../components';
import { SpecifyArea }from '../components';
//import { connect } from 'react-redux';
import axios from 'axios';

const remote = 'https://i.pinimg.com/originals/ae/e2/c7/aee2c787f9f57fc243d8890dfc54b9b0.jpg';


export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
        params : {
            city : '', 
            country : ''
        }, 
        recordedTemp : {}
    }
  }
  
  onChange = key  => e => {
    //console.log(key , e , "onchange called")
    let { params } = this.state   
    params[key] = e
    this.setState({ params })
  }

  onSearch = () => {

    // let query = select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="chandigarh,India ")
    // query.concat('&format=json&env=storedatatables.alltableswithkeys')
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res => {
      this.setState({ 
        recordedTemp : res.data
      })
     // this.props.history.push('/home')
    })
  }

  render() {
    return (
      <Container style={{backgroundColor: '#fff', flex: 1 }}>
        <ImageBackground style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} source={{ uri: remote }}>
          <Content>
            <View style={{paddingTop: 80, padding: 20 }}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{width: 100, height: 100}} source={{uri: 'http://simpleicon.com/wp-content/uploads/rocket.png'}}/>
            </View>
            <Text></Text>
              <SpecifyArea onChange={this.onChange} params={this.state.params}/>
              <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                <Button block bordered style={{ borderColor: '#fff' }}  onPress={this.onSearch}>
                  <Text style={{ color: '#fff' }}>Search</Text>
                </Button>
              </View>
            </View>
            <Text style={{ textAlign: 'center', color: '#fff' }} onPress={() => this.props.history.push('/')}>Go Back</Text>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

 