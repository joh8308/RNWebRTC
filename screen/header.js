import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  Platform,
  TouchableHighlight,
  AppState,
  AsyncStorage,
} from 'react-native';

const { width } = Dimensions.get('window');

const BTN_PADDING = 8;
const BTN_IMG_SIZE = 27.5;
const BTN_AREA_SIZE = 27.5 + BTN_PADDING*2;

const TAG = 'Header:';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null, // added this
    };

    this.lastAppState = ''
  }

  componentWillMount(){
  }
  render() {

    return (
      <View
        style={[styles.container, this.props.style]}>

        <TouchableOpacity style={[styles.btnArea, {width:BTN_AREA_SIZE*2}]}
                          onPress={()=> this.safeRun(this.props.leftBtnFunc)}>
          <Image 
              style={styles.button}
              resizeMode={Image.resizeMode.contain}
              source={this.props.leftBtnIcon} />
        </TouchableOpacity>

        <Text style={styles.titleText}> {this.props.title} </Text>


        { !this.props.rightRightBtnText &&
        <View style={styles.rightWrapper}>
          
          <TouchableOpacity style={[styles.btnArea, {}]} onPress={()=> this.safeRun(this.props.rightLeftBtnFunc)}>
            <Image 
                style={[styles.button, {marginLeft:2}]}
                resizeMode={Image.resizeMode.contain}
                source={this.props.rightLeftBtnIcon} />    
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnArea]} onPress={()=> this.safeRun(this.props.rightRightBtnFunc)}>
              <Image 
                  style={[styles.button, {marginLeft:-3}]}
                  resizeMode={Image.resizeMode.contain}
                  source={this.props.rightRightBtnIcon} />
          </TouchableOpacity>  
      </View>
      }

      { this.props.rightRightBtnText &&
      <View style={[styles.rightWrapper, {justifyContent:'flex-end'}]}>
        <TouchableOpacity style={[styles.btnArea, {width:null, borderWidth:0}]} onPress={()=> this.safeRun(this.props.rightRightBtnFunc)}>
          <Text style={styles.text}> {this.props.rightRightBtnText} </Text>
        </TouchableOpacity>
      </View>
      }
      </View>
    );
  }

  safeRun(func) {
    if(func!==undefined) func();
  }
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    // flex: 0,
    flexDirection: 'row',
    height: Platform.OS == 'ios' ? 65:55,
    paddingTop: Platform.OS == 'ios' ? 15 : 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 5,
    //backgroundColor:'red',
    backgroundColor:'#0096ff',
  },
  rightWrapper: {flex:0, width:BTN_AREA_SIZE*2, flexDirection:'row', 
    justifyContent:'space-between', borderColor:'yellow', borderWidth:0,marginTop:6},
  titleText: {
    flex:1, textAlign:'center', color:'#ffffff',       fontSize:18, fontWeight:'600', color:'#ffffff',marginTop:6
  },

  btnArea: {
    flex:0, width:BTN_AREA_SIZE, padding:8, 
    //borderColor:'white', borderWidth: 1,
    justifyContent:'center',
//      marginTop:3,
      marginBottom:7,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
      marginTop:6
  },
  button: {
    width:BTN_IMG_SIZE, height:BTN_IMG_SIZE,
      marginTop:6,
  },
  
});