import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';

const { width } = Dimensions.get('window');

export default class ChatRoomItem extends Component {
  render() {
    let containerAppendedBG = this.props.backgroundColor ? { backgroundColor: this.props.backgroundColor } : null;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.targetId)}>
        <View style={[styles.container, containerAppendedBG, { height: 65 }]}>
          {/*컨텐츠*/}
          <View style={[styles.contArea, { flex: 1 }]}>
            <View style={styles.contTouch}>
              {/*이미지*/}
              <Image
                style={[styles.profImg, { height: 50, width: 50, borderRadius: 25 }]}
                source={this.props.imgUri}
                resizeMode={Image.resizeMode.cover}
              />
              {/*텍스트*/}
              <View style={styles.contText}>
                <Text
                  style={styles.txtName}>{this.props.title}</Text>
                {this.props.text &&
                <Text style={styles.txtDept}>{this.props.text}</Text>
                }
              </View>
            </View>
          </View>

          {Platform.OS === 'ios' ?
            this.props.statusMsg !== '' && this.props.showStatusMsg &&
            <View style={styles.statusMsgFont}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#242528",
                  backgroundColor: '#f7f7f7',
                  borderColor: '#f7f7f7',
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 3
                }}
                numberOfLines={2}>{this.props.statusMsg}</Text>
            </View>
            :
            this.props.statusMsg !== '' && this.props.showStatusMsg &&
            <View style={{ width: 150, height: 50 }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingLeft: 5,
                  marginRight: 5,
                  paddingRight: 5
                }}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    height: 50,
                    justifyContent: 'center',
                    fontSize: 13,
                    color: "#242528",
                    borderRadius: 5,
                    backgroundColor: '#f7f7f7',
                    padding: 5
                  }}
                  numberOfLines={2}>{this.props.statusMsg}</Text>
              </View>
            </View>
          }
        </View>
      </TouchableOpacity>);
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
    width: width,
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
