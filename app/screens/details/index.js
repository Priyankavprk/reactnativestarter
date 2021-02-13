import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

class Details extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details</Text>
      </View>
    );
  }
}

export default Details;
