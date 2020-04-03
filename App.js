import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Login extends Component {
constructor(props) {
  super(props);
  this.state = {
    isButtonTap: false
  }
}

_updateState(){
  this.setState({
    isButtonTap:!this.state.isButtonTap 
  });
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title="다음" onPress={this._updateState.bind(this)} />
        </View>
        <Text style={this.state.isButtonTap ? styles.afterTitle : styles.title}>JK의 사진 액자</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  title: {
    alignSelf: 'center'
  },
  afterTitle: {
    backgroundColor: 'yellow',
    tintColor: 'blue',
    alignSelf: 'center'
  }
});