import React, { Component } from 'react';
import { Content, Accordion , Card, CardItem, Text, Body , Thumbnail } from 'native-base';
import { View } from 'react-native'; 

export default class SpecifyArea extends Component {
  render() {
      
    const { info } = this.props
    let { image = {} , title = '' , wind = {} } = info.query.results.channel || {}
    let { forecast = [] }  = info.query.results.channel.item 
    return (
      <View style={{ paddingRight: 20 }}>
        {forecast && forecast.map((data, index) => {
            return  <Card key ={index}>
                      <CardItem header><Text>{title}</Text></CardItem>
                      <CardItem bordered>
                        <Body>
                          <Text>{data.date} - {data.day} </Text>
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