import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

const john = require('../res/image/john.png');
const phantom = require('../res/image/yun.png');

import Header from './header';

export default class CallScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {userName: ''};
  }

  checkUser = () => {
    const userName = this.state.userName.toLowerCase();
    if (userName === '') {
      Alert.alert(
        '알림',
        '아이디를 입력해주세요',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }

    else if (userName === 'john') {
      this.props.changeScreen('list', 'john');
    }

    else if (userName === 'phantom') {
      this.props.changeScreen('list', 'phantom');
    }

    else {
      Alert.alert(
        '알림',
        '존재하지 않는 아이디입니다',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  };

  render() {
    return (
      <View>
        <Header
          title={this.props.user === 'john' ? 'Phantom (통화중)' : 'John (통화중)'}
          style={{
            backgroundColor: "#0096ff",
            borderBottomColor: '#141414'
          }}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={[styles.profImg, {marginTop: 80, height: 300, width: 300, borderRadius: 100}]}
            source={this.props.user ==='john' ? phantom : john}
            resizeMode={Image.resizeMode.cover}
          />
          <Text style={{fontSize: 30, fontWeight: "700"}}>
            {this.props.user === 'john' ? 'Phantom' : 'John'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusMsgFont: {
    height: 55,
    width: 150,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 5,
    paddingLeft: 5,
    marginRight: 5,
    paddingRight: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffff",
  },
  checkBox: {
    flex: 0,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 0
  },
  checkBoxImg: {
    width: 34,
    height: 34
  },
  contArea: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 70,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contTouch: {
    flex: 1,
    height: 74,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contText: {
    borderColor: 'white',
    marginLeft: 3,
  },
  profImg: {
    marginLeft: 20,
    marginRight: 9
  },
  txtName: {
    fontSize: 15,
    color: "#242528",
    backgroundColor: 'transparent',
    fontWeight: "700",
  },
  txtDept: {
    fontSize: 13,
    color: "#242528",
    backgroundColor: 'transparent',
    marginTop: 4,
  },
  posDate: {
    position: 'absolute',
    top: 11,
    right: 11,
  },
  txtDate: {
    position: 'absolute',
    top: 11,
    right: 11,
    fontSize: 12,
    color: '#cccccc',
  }
});