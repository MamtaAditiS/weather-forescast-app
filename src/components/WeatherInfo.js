import React, { Component } from 'react';
import { Content, Accordion , Card, CardItem, Text, Body , Thumbnail } from 'native-base';
import { View } from 'react-native'; 

export default class SpecifyArea extends Component {
  render() {
      
    const { info } = this.props
    console.log(info.query.results.item.forecast, "info ")
    return (
      <View style={{ paddingRight: 20 }}>
        {info.forecast && info.forecast.map((data, index) => {
            return  <Card>
                        <CardItem header bordered>
                            <Text>{info.title}</Text>
                        </CardItem>
                        <CardItem bordered>
                        <Body>
                            <Thumbnail source={{uri: `${info.query.results.image.url}` }} />
                            <Text>{data.date} - {data.day} </Text>
                            <Text> Highest Temprature: {data.high}</Text>
                            <Text> Lowest Temprature: {data.low}</Text>
                            <Text> Description: {data.text}</Text>
                        </Body>
                        </CardItem>
                    </Card>
        })}
        <Text> Wind Speed: {info.wind && info.wind.speed} mph</Text>
      </View>
    );
  }
}