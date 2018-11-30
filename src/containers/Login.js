import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Container, Content, Header } from 'native-base';
//import { LoginForm } from '../components';
import { SpecifyArea , WeatherInfo }from '../components';
//import { connect } from 'react-redux';
import axios from 'axios';

const remote = 'https://imgcdn.maketecheasier.com/2013/11/WeatherWallpaper-Stormfly.jpg';


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
   // console.log(this.state.params , "params")
    const { city, country } = this.state.params
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${country}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res => {
      console.log(res.data , "api response")
      if(res.data){
        this.setState({ 
          recordedTemp : res.data, 
          saved : true 
        })
      }
    })
  }

  render() {
    return (
      <Container style={{backgroundColor: '#fff', flex: 1 }}>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: remote }}>
          <Content>
           { this.state.saved && this.state.recordedTemp ? 
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
                <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                  <Button block bordered style={{ borderColor: '#fff' }}  onPress={this.onSearch}>
                  <Text style={{ textAlign: 'center', color: '#fff' }} onPress={() => this.props.history.push('/')}>Go Back</Text>
                  </Button>
                </View>
              </View>}
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

 