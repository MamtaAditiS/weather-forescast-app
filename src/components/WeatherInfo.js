import React, { Component } from 'react';
import { Content, Accordion , Card, CardItem, Text, Body , Thumbnail } from 'native-base';
import { View } from 'react-native'; 

export default class WeatherInfo extends Component {
  render() {
      
    const { info } = this.props
    let { image = {} , title = '' , wind = {} } = info.query.results.channel || {}
    let { forecast = [] }  = info.query.results.channel.item 
    return (
      <View style={{ paddingRight: 20 }}>
        {forecast && forecast.map((data, index) => {
            return  <Card key ={index}>
                      <CardItem header> {data.date} - {data.day}</CardItem>
                      <CardItem bordered>
                        <Body>
                          <Text> Highest Temprature: {data.high}</Text>
                          <Text> Lowest Temprature: {data.low}</Text>
                          <Text> Description: {data.text}</Text>
                          <Text> Wind Speed: {wind.speed} mph</Text>
                        </Body>
                      </CardItem>
                    </Card>
        })}
      </View>
    );
  }
}