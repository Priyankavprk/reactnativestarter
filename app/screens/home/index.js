import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { updateData } from "../../store/actions";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen diap</Text>
        <TouchableOpacity onPress={() => this.props.updateData()}>
          <Text>{this.props.counter}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateData: () => dispatch(updateData()),
  }
}


const mapStateToProps = state => ({
  counter: state.timer.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
