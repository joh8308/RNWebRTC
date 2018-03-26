import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  BackHandler,
  AppState,
  AsyncStorage
} from 'react-native';

import Header from './header';
import ChatRoom from './chatRoom';

const width = Dimensions.get('window').width;

export default class Buddy extends Component {
  callUser = () => {
    console.log('call');
  };

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7'}}>
        <Header
          title={'친구 리스트'}
          style={{
            backgroundColor: "#0096ff",
            borderBottomColor: '#141414'
          }}/>

        <View>
          <Text style={styles.sectionText}>내 프로필</Text>
          <ChatRoom isStatic={true}
                    imgUri={require('../res/image/john.png')}
                    title={'john'}
                    statusMsg={'mine'}
                    onPress={() => this.callUser()}
                    showMoreBtn={false}
                    showStatusMsg={true}/>

          <Text
            style={styles.sectionText}>{'친구 (1)'}</Text>
          <ChatRoom
            isStatic={true}
            imgUri={require('../res/image/yun.png')}
            title={'phantom'}
            statusMsg={'friends'}
            onPress={() => this.callUser()}
            showMoreBtn={false}
            showStatusMsg={true}/>
        </View>
      </View>
    )
  }
}

const ELEMENT_WIDTH = width - 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  contInvite: {
    backgroundColor: "#ffffff",
  },
  body: {
    width: ELEMENT_WIDTH,
    flex: 1,
  },
  inputWrapper: {
    width: width,
    height: 40,
    padding: 10,
    justifyContent: 'center'
  },
  input: {
    fontSize: 16,
    height: 50,
    lineHeight: 32,
    color: '#999999',
    marginLeft: 8 + 16 + 9,
    //flex: 1,
    width: width - 80,
  },
  listView: {
    flex: 1,
    width: width,
    backgroundColor: "#ffffff",
  },
  listViewInvite: {
    backgroundColor: 'transparent',
  },
  sectionText: {
    fontSize: 13.5,
    fontWeight: "500",
    color: '#666666',
    backgroundColor: '#f7f7f7',
    paddingTop: 9.3,
    paddingBottom: 9.8,
    paddingLeft: 20,
  },
  searchImg: {
    position: 'absolute',
    left: 20, top: 11,
    width: 16, height: 16,
  },
  clearImg: {
    left: null,
    right: 6,
    top: 1,
    width: 40, height: 35,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  lvSelected: {
    width: width - 20,
    height: 70,
    maxHeight: 70,
    flex: 0,
  },
});