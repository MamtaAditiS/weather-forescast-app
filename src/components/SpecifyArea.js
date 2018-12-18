import React, { Component } from 'react';
import { Form, Item, Input, Label } from 'native-base';
import { View } from 'react-native';

export default class SpecifyArea extends Component {
  render() {
    const { city, country } = this.props.params
    return (
      <View style={{ paddingRight: 20 }}>
        <Form>
          <Item floatingLabel>
            <Label style={{ color: '#fff', fontSize: 14 }}>City</Label>
            <Input 
              style={{ fontSize: 16, color: '#fff' }} 
              onChangeText={this.props.onChange('city')}
              value={city}
            />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: '#fff', fontSize: 14 }}>Country</Label>
            <Input 
              style={{ fontSize: 16, color: '#fff' }}
              onChangeText={this.props.onChange('country')}
              value={country}
            />
          </Item>
        </Form>
      </View>
    );
  }
}