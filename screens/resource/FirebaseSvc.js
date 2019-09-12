import firebase from 'firebase';
import uuid from 'uuid';
import {AsyncStorage} from 'react-native';
import { Constants, ImagePicker, Permissions } from 'expo';

const config = {
  apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
  authDomain: "waqarchatapp.firebaseapp.com",
  databaseURL: "https://waqarchatapp.firebaseio.com",
  projectId: "waqarchatapp",
  storageBucket: "waqarchatapp.appspot.com",
  messagingSenderId: "676235345078",
}



let  Sender = ''
let Recevier =''
class FirebaseSvc  {
  constructor() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }

  }




  

  login = async(user, success_callback, failed_callback) => {
    console.log("logging in");
    const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(success_callback, failed_callback);
  }

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        this.login(user);
      } catch ({ message }) {
        console.log("Failed:" + message);
      }
    } else {
      console.log("Reusing auth...");
    }
  };

  UserList = ()=> {
    var UserList
    firebase.database().ref('users/').once('value')
   .then(function(dataSnapshot) {
    return UserList = dataSnapshot.val()
    console.log('dataSnapshot.val()')
    //  console.log(dataSnapshot.val())
    });
    // return UserList
  }
  createAccount = async (user) => {
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function() {
        console.log("created user successfully. User email:" + user.email + " name:" + user.name);
        var userf = firebase.auth().currentUser;
        console.log(userf.uid)
        firebase.database().ref('users/'+userf.uid+'/').update(user)
        userf.updateProfile({ displayName: user.name})
        .then(function() {
          console.log("Updated displayName successfully. name:" + user.name);
          alert("User " + user.name + " was created successfully. Please login.");
        }, function(error) {
          console.warn("Error update displayName.");
        });
      }, function(error) {
        // console.error("got error:" + typeof(error) + " string:" + error.message);
        alert("Create account failed. Error: "+error.message);
      });
  }

  uploadImage = async uri => {
    console.log('got image to upload. uri:' + uri);
    try {

      
      const response = await fetch(uri);
      const blob = await response.blob();

      let imageName = uuid.v4()
      const ref = firebase
        .storage()
        .ref('avatar1')
        .child(imageName);
      const task = ref.put(blob);
    
      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {
              /* noop but you can track the progress here */
          },
          reject /* this is where you would put an error callback! */,
          () => resolve(task.snapshot.downloadURL)
        );
      });
    } catch (err) {
      console.log('uploadImage try/catch error: ' + err.message); //Cannot load an empty url
    }
  }


  updateAvatar = (url) => {
    //await this.setState({ avatar: url });
    var userf = firebase.auth().currentUser;
    if (userf != null) {
      userf.updateProfile({ avatar: url})
      .then(function() {
        console.log("Updated avatar successfully. url:" + url);
        alert("Avatar image is saved successfully.");
      }, function(error) {
        console.warn("Error update avatar.");
        alert("Error update avatar. Error:" + error.message);
      });
    } else {
      console.log("can't update avatar, user is not login.");
      alert("Unable to update avatar. You must login first.");
    }
  }
     

  onLogout = user => {
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful.");
    }).catch(function(error) {
      console.log("An error happened when signing out");
    });
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('Recevier')
      if(value !== null) {
        // value previously stored
      // Sender = firebase.auth().currentUser
        Recevier = value
        // return value
      }
    } catch(e) {
      // error reading value
    }
  }

  getDatadummy = async ()=>{

    let value = await this.getData()
    return value
  }
  get ref() {
 this.getData()

  return firebase.database().ref('chats/'+Sender+'/Messages/'+Recevier);
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot; //needed for giftedchat
    const timestamp = new Date(numberStamp);

    const message = {
      id,
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

updateProfilData=(user)=>{

  // var UID = 

  var UID = firebase.auth().currentUser.uid
  console.log('UID',UID)
  console.log('user',user)
  firebase.database().ref('users/'+UID).update(user)
alert('Profile Updated ')
}


  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(firebaseSvc.parse(snapshot)));
  }

  async  uploadImageAsync(name)  {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    var uri = result.uri
    console.log(result.uri)
  console.log('done ')
  let imageName = uuid.v4()

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
   };
   xhr.onerror = function() {
     reject(new TypeError('Network request failed')); // error occurred, rejecting
   };
   xhr.responseType = 'blob'; // use BlobModule's UriHandler
   xhr.open('GET', uri, true); // fetch the blob from uri in async mode
   xhr.send(null); // no initial data
 });

// do something with the blob, eg. upload it to firebase (API v5.6.0 below)
const ref = firebase
  .storage()
  .ref()
  .child(name+'/'+imageName);
  // .child(uuid.v4());
const snapshot = await ref.put(blob);
const remoteUri = await snapshot.ref.getDownloadURL();
let imageObject = {
  url : remoteUri , 
  imageType : name
}
// console.log(name,imageObject)
await AsyncStorage.setItem(name,remoteUri );
console.log(remoteUri)
// when we're done sending it, close and release the blob
//  alert('myadat ',a)
blob.close();

// return the result, eg. remote URI to the image
// return remoteUri
}


  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  // send the message to the Backend
  send = messages => {
    var that = this

        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
            createdAt: this.timestamp,
          };
          this.ref.push(message);
          firebase.database().ref('chats/'+Recevier+'/Messages/'+Sender).push(message)
      
        }
  };

  refOff() {
    this.ref.off();
  }
}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
