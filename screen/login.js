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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import Header from './header';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {userName: ''};
  }

  checkUser = () => {
    const userName = this.state.userName.toLowerCase();
    if(userName === '') {
      Alert.alert(
        '알림',
        '아이디를 입력해주세요',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }

    else if(userName === 'john') {
      this.props.changeScreen('list', 'john');
    }

    else if(userName === 'phantom') {
      this.props.changeScreen('list', 'phantom');
    }

    else {
      Alert.alert(
        '알림',
        '존재하지 않는 아이디입니다',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }
  };

  render() {
    return (
      <View>
        <Header
          title={'사용자 선택'}
          style={{
            backgroundColor: "#0096ff",
            borderBottomColor: '#141414'
          }}/>
        <ScrollView>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=>this.checkUser()}>
              <Image
                style={[styles.profImg, {marginTop: 40, height: 200, width: 200, borderRadius: 100}]}
                source={require('../res/image/profile.png')}
                resizeMode={Image.resizeMode.cover}
              />
            </TouchableOpacity>
            <TextInput
              textAlign={'center'}
              style={{
                marginLeft: 40,
                width: width - 40,
                height: 100,
                fontSize: 30,
                fontWeight: "700"
              }}
              onChangeText={(text) => this.setState({userName: text})}
            />
          </View>
        </ScrollView>
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