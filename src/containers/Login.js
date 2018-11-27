import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Container, Content } from 'native-base';
//import { LoginForm } from '../components';
import { SpecifyArea , WeatherInfo }from '../components';
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
        recordedTemp : {}, 
        saved : false
    }
  }
  
  onChange = key  => e => {
    let { params } = this.state   
    params[key] = e
    this.setState({ params })
  }

  onSearch = () => {
    const { city, country } = this.state.params
    console.log(city , country , "params")
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${country}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res => {
      if(res.data){
        this.setState({ 
          recordedTemp : res.data, 
          saved : true 
        })
      }
      else {
         console.log(this.state.recordedTemp , "test in else ")
      }
    })
  }

  render() {
    return (
      <Container style={{backgroundColor: '#fff', flex: 1 }}>
        <ImageBackground style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} source={{ uri: remote }}>
          <Content>
           { this.state.saved ? 
              <WeatherInfo info={this.state.recordedTemp || {} }/>
            :<View style={{paddingTop: 80, padding: 20 }}>
              <View style={{ alignItems: 'center' }}>
                <Image style={{width: 100, height: 100}} source={{uri: 'http://simpleicon.com/wp-content/uploads/rocket.png'}}/>
              </View>
              <SpecifyArea onChange={this.onChange} params={this.state.params}/>
              <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                <Button block bordered style={{ borderColor: '#fff' }}  onPress={this.onSearch}>
                  <Text style={{ color: '#fff' }}>Search</Text>
                </Button>
              </View>
              <Text style={{ textAlign: 'center', color: '#fff' }} onPress={() => this.props.history.push('/')}>Go Back</Text>
            </View>}
            
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

 