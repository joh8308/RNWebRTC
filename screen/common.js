//@flow
'use strict';
import React, {
  StyleSheet,
  Dimensions,
} from 'react-native';

var Common = {
  darkBlack: '#1c1d1f',
  black : '#242528',
  green : '#00c878',
  orange: '#ff5000',
  white : '#ffffff',
  lightGray: '#ffffff80',
  red   : '#d4460a',
  blue : '#0096ff',
  chatOtherWarpColor : '#f0f0f0',
  chatOtherText : '#333333',
  chatActionText: '#46505acc',
  chatActionBG  : '#a0aab41f',
  chatAuxText   : '#000000cc',
  chatBG : '#e9ecf1',
  chatInputBG : '#999999',
  textInputBG: '#36373a',
  textInputPlaceHolder: '#999999',
  chatListHeader    : '#0096ff',
  chatListSeperator : '#141414',
  modalBG : '#000000b2',
  splitColor: 'rgb(20,20,20)',
  chatMenuItem: '#1c1d1f',
  btnGray: '#47484b',
  bar: '#cccccc',
  gray: '#808080',
  buttonColor : '#0087e5',
  splashBackColor : '#021b2d'
};

const { width, height } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = 22;
const ELEMENT_WIDTH = width - 40;

const BADGE_SIZE = 24;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: Common.black,
  },
  transparent_button: {
    marginTop: 10,
    padding: 15
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  button: {
    width: ELEMENT_WIDTH,
    height: 44,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius:4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  textInput: {
    backgroundColor: Common.white,
    // borderWidth: 1,
    //     borderColor : '#999999'
  },
  separator: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#f7f7f7',
  },
  //custom
  badgePos: {
    position: 'absolute',
    left: 14,
    top: -7,
  },
  badgeCircle: {
    width:  BADGE_SIZE,
    height: BADGE_SIZE,
    borderColor: Common.red,
    borderRadius: BADGE_SIZE/2,
    borderWidth: 1.1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'transparent',
  },
  badgeColorAtTab : {
    backgroundColor: '#ff5000',
    borderColor: '#ff5000',
  },
  badgeTextAtTab: {
    color:'white',
  },
  badgeText: {
    fontSize: 9,
    fontWeight:"500",
    //color: 'white',
    color: Common.red,
    //backgroundColor: Common.black,
    textAlign: 'center',
  },
  //util
  centering: {
    justifyContent:'center', alignItems:'center',
  },
  fullScreen: {
    position:'absolute', left:0, top:0, right:0, bottom:0,
    //backgroundColor:'white',
  },
  bg: {
    //backgroundColor:Common.darkBlack,
    backgroundColor:'black',
  },
  textBold: {
    fontWeight: "700",
  },
  textlargeWhite: {
    fontSize:16,
    lineHeight:16,
    color:'white',
    fontWeight:"700",
    marginVertical:15,
  },
  textlargeColor:{
    fontSize:16,
    // lineHeight:16,
    color: '#333333',
    fontWeight:"700",
    marginVertical:15,
  }
});

module.exports.Common = Common;
