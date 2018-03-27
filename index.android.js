var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBNH_5KtyPkUWzaBTNpPhqyYZjQ5dRsvzg",
  authDomain: "webrtc-test-87a7e.firebaseapp.com",
  databaseURL: "https://webrtc-test-87a7e.firebaseio.com",
  projectId: "webrtc-test-87a7e",
  storageBucket: "webrtc-test-87a7e.appspot.com",
  messagingSenderId: "116529298238"
};
firebase.initializeApp(config);

if (!window.navigator.userAgent) {
  window.navigator.userAgent = "react-native";
}
require('./main');