import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container, Header, Left, Body,Form, Item, Input, Label ,CheckBox, Right,ListItem, Radio,Button, Icon, Title ,  Content, Card, CardItem, Thumbnail,} from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import firebase, { database } from 'firebase';
import { Constants, ImagePicker, Permissions } from 'expo';
import {AsyncStorage} from 'react-native';

import {
  ImageEditor,
} from 'react-native';
import firebaseSvc from '../resource/FirebaseSvc';

// import Nav from './NavBar'

// import { MonoText } from '../components/StyledText';

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
		super(props)
		this.state={
      Uname : '' ,
      name : '',
      LName : ' ', 
     YearOfExperience : '',
     Gender : '',
			email:'', 
      password:''	, 
      cnfrmPass :'',
Location : '',

    call  : ''   ,
    mail   :   '' ,
    Facebook  :    '',
    Instagram  :    '',
    Twitter   : '' , 
    Whats  : '' , 
    
    avatar : ' https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png', 
      loading: true , 
      hasCameraPermission: null,
     	imageLink	:''
    }
    
    const { state, navigate } = this.props.navigation;

	}
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("../resource/Roboto.ttf"),
      Roboto_medium: require("../resource/Roboto_medium.ttf"),
      ...Ionicons.font,    });

          this.setState({ loading: false });
  }

  moveToSignIn= ()=>{

    console.log(this.props)
    const { state, navigate } = this.props.navigation;
    navigate("SignIn" )
    console.log('navigate')
    console.log(navigate)


  }
  uploadImage = async () => {

    // alert('sdf')
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    var uri = result.uri
    console.log(result.uri)
    const response = await fetch(uri);
    console.log('response',response)
    const blob = await response.blob();
  // var projectNameText = this.state.projectNameText
    // var ref = firebase.storage().ref().child(myUId+'/'+projectNameText+'/'+imageName).then(()=>{
      console.log('blob',blob)
    var ref = firebase.storage().ref().child('test/test.jpg')
  console.log('ref',ref)
    var a =  ref.put(blob);
    console.log('a',a)
  }

  setImageValue(){
    var that =  this

    AsyncStorage.getItem('myData').then((value)=>{
      console.log('value',value)
       that.setState({
         imageLink :value
       })
       console.log('that.state.imageLink',that.state.imageLink)
     })
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      that.onPressCreate()
    }, 2000)
  }
  onPressCreate = async () => {
    console.log('create account... email:' + this.state.email);
    try {
      
 
  // console.log('that.state.imageLink',that.state.imageLink)

  console.log(this.state)
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
        Location : this.state.Location,
        Uname : this.state.Uname ,
        // FName : this.state.FName,
        // LName :this.state.LName, 
    call  :  this.state.call  ,
    mail   :  this.state.mail ,
    Facebook  :   this.state.Facebook,
    Instagram  :    this.state. Instagram,
    Twitter   :  this.state.Twitter , 
    Whats  :  this.state.Whats, 
    YearOfExperience  :  this.state.YearOfExperience, 

      };

      var str1 = this.state.cnfrmPass;
      var str2 = this.state.password
      var n = str1.localeCompare(str2);
      // //console.log(n)  

      if(n===-1){
        alert('Password not matched')

      }

      else{
      await firebaseSvc.createAccount(user);
   } } catch ({ message }) {
      console.log('create account failed. catch error:' + message);
    }
  };



  
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextName = name => this.setState({ name });

    // uploadImageAsync= async(uri) =>  {
uploadImageLinkFunction(name){
  var UID = firebase.auth().currentUser.uid

  if(name!=null){
    var PicName = UID+ name
   var CompanyURL  =  firebaseSvc.uploadImageAsync(PicName)
    console.log('CompanyURL',CompanyURL)
    // var storage = firebase.storage();
    // var pathReference = storage.ref();
    // pathReference.child(CompanyURL).getDownloadURL().then(function(url) {
    //   // `url` is the download URL for 'images/stars.jpg'
    
    //   // This can be downloaded directly:
    //   console.log('url',url)
    //   var xhr = new XMLHttpRequest();
    //   xhr.responseType = 'blob';
    //   xhr.onload = function(event) {
    //     var blob = xhr.response;
    //   };
    //   xhr.open('GET', url);
    //   xhr.send();
    
    //   // Or inserted into an <img> element:
    //   var img = document.getElementById('myimg');
    //   img.src = url;
    // }).catch(function(error) {
    //   // Handle any errors
    // });
  }
  else{
    var ProfileURL =  firebaseSvc.uploadImageAsync(UID)
    console.log(ProfileURL)

  }
var that = this
  // var a =  AsyncStorage.getItem('myData').then((value)=>{
  //  console.log('value',value)
  //   that.setState({
  //     imageLink :value
  //   })
  // })
  console.log('this.state.imageLink',this.state.imageLink)
//  alert(this.state.imageLink)
}

      async  uploadImageAsync()  {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //     });
    //     var uri = result.uri
    //     console.log(result.uri)
    //   console.log('done ')
    //   const blob = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //       resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
    //    };
    //    xhr.onerror = function() {
    //      reject(new TypeError('Network request failed')); // error occurred, rejecting
    //    };
    //    xhr.responseType = 'blob'; // use BlobModule's UriHandler
    //    xhr.open('GET', uri, true); // fetch the blob from uri in async mode
    //    xhr.send(null); // no initial data
    //  });
  
    // // do something with the blob, eg. upload it to firebase (API v5.6.0 below)
    // const ref = firebase
    //   .storage()
    //   .ref()
    //   .child(uuid.v4());
    // const snapshot = await ref.put(blob);
    // const remoteUri = await snapshot.ref.getDownloadURL();
  
    // // when we're done sending it, close and release the blob
    // blob.close();
  
    // // return the result, eg. remote URI to the image
    // return remoteUri;
  }


  onImageUpload = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
      );
    //   alert(status)
      try {
        // only if user allows permission to camera roll
        // alert('NT done')
        // alert(this.state.hasCameraPermission)
        if (cameraRollPerm === 'granted') {
          // alert('done')
        console.log('choosing image granted...');
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(
          'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
        );

        var wantedMaxSize = 150;
        var rawheight = pickerResult.height;
        var rawwidth = pickerResult.width;
        
        var ratio = rawwidth / rawheight;
        var wantedwidth = wantedMaxSize;
        var wantedheight = wantedMaxSize/ratio;
        // check vertical or horizontal
        if(rawheight > rawwidth){
            wantedwidth = wantedMaxSize*ratio;
            wantedheight = wantedMaxSize;
        }
        console.log("scale image to x:" + wantedwidth + " y:" + wantedheight);
        let resizedUri = await new Promise((resolve, reject) => {
          ImageEditor.cropImage(pickerResult.uri,
          {
              offset: { x: 0, y: 0 },
              size: { width: pickerResult.width, height: pickerResult.height },
              displaySize: { width: wantedwidth, height: wantedheight },
              resizeMode: 'contain',
          },
          (uri) => resolve(uri),
          () => reject(),
          );
        });
        // let uploadUrl = await firebaseSvc.uploadImage(resizedUri);
        let uploadUrl = await this.uploadImageAsync(uri)
        console.log('uploadUrl',uploadUrl)
        //let uploadUrl = await firebaseSvc.uploadImageAsync(resizedUri);
         this.setState({ avatar: uploadUrl });
        console.log(" - await upload successful url:" + uploadUrl);
        console.log(" - await upload successful avatar state:" + this.state.avatar);
        // await firebaseSvc.updateAvatar(uploadUrl); //might failed
      }
    } catch (err) {
      // alert(err.message)

      console.log('onImageUpload error:' + err.message);
      alert('Upload image error:' + err.message);
    }
  };




  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    const { navigate  , state} = this.props.navigation; 
    console.log(this.props)
    return (
      // <View style={styles.container}>
      <Container >
      {/* <Nav ScreenName ='Activity Feed' ScreenShow={false} /> */}
      {/* <Header /> */}

      <Content>
      <View style={styles.mianView}>
        <Text style={styles.login}>Sign Up</Text>
        <View  style={styles.InterternalView}>

       

        <Form>
            <Item floatingLabel>
              <Label style={styles.textFBandLog}> Name</Label>
              <Input onChangeText={name => this.setState({name})} />
            </Item>
            {/* <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Last Name</Label>
              <Input  onChangeText={LName => this.setState({LName})}  />
            </Item> */}
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>User Name</Label>
              <Input  onChangeText={Uname => this.setState({Uname})} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Location</Label>
              <Input  onChangeText={Location => this.setState({Location})} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Year Of Experience</Label>
              <Input  onChangeText={YearOfExperience => this.setState({YearOfExperience})}/>
            </Item>
           
            <Item floatingLabel >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={email => this.setState({email})}  placeholder='Email '/>
            </Item>
            <Item  floatingLabel>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	 secureTextEntry={true}  onChangeText= {password => this.setState({password})}  placeholder='Password ' />
            </Item>
            <Item  floatingLabel>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	onChangeText={cnfrmPass => this.setState({cnfrmPass})}  placeholder='Confirm Password ' />
            </Item>
          </Form>

          
            <Text style={styles.subHeading}>Gender</Text>
          <ListItem selected={true}>
            {/* <Left> */}
            <Radio
                color={"black"}
                selectedColor={"black"}
                style={styles.radio}
                

                // selected={true}
                />
              <Text>Male</Text>
            {/* </Left> */}
            {/* <Right> */}
            <Radio
                color={"black"}
                selectedColor={"black"}
                style={styles.radio}
                // selected={true}
                />
              <Text>Female</Text>
            {/* </Right> */}
          </ListItem>
          
                <Text style={styles.subHeading}> Type of Raelty</Text>

                <ListItem>
            <CheckBox style={styles.check} />
            <Body>
              <Text>Residential</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true}  style={styles.check} />
            <Body>
              <Text>Commercial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox style={styles.check}/>
            <Body>
              <Text >Agriculture</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true} style={styles.check} />
            <Body>
              <Text > Industrial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox style={styles.check} />
            <Body>
              <Text >Land</Text>
            </Body>
          </ListItem>
          <View >

          <Card>
            <CardItem header>
              <Text style={styles.subHeading}>Contact</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='md-call' />
            <Input  onChangeText={call => this.setState({call})} placeholder='Call'/>
          </Item>
              <Item>
            <Icon active name='mail' />
            <Input  onChangeText={mail => this.setState({mail})} placeholder='Text Message'/>
          </Item>
              <Item>
            <Icon active name='md-mail' />
            <Input placeholder='Email'  onChangeText={FName => this.setState({FName})}/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

         {/* Social Media  */}
          <Card>
            <CardItem header>
              <Text style={styles.subHeading}> Social Media </Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='logo-facebook' />
            <Input placeholder='Facebook' onChangeText={Facebook => this.setState({Facebook})}/>
          </Item>
              <Item>
            <Icon active name='logo-instagram' />
            <Input placeholder='Instagram'  onChangeText={Instagram => this.setState({Instagram})}/>
          </Item>
              <Item>
            <Icon active name='logo-twitter' />
            <Input placeholder='Twitter'  onChangeText={Twitter => this.setState({Twitter})}/>
          </Item>
              <Item>
            <Icon active name='logo-whatsapp' />
            <Input placeholder="Whats App"  onChangeText={Whats => this.setState({Whats})}/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

          <Text style={{justifyContent: "flex-end" , textAlign: 'right' , marginRight : '6%', color :'white'}}>Forget Password</Text>
      <View style={{marginTop : '15%'}} >

          <Button block bordered light style={styles.FbAndLogBtn} onPress={() => this.setImageValue()}>
            <Text style={styles.textForFband}>Sign Up</Text>
          </Button>
          {/* <Button block bordered  style={styles.FbAndLogBtn} onPress={() => this.onImageUpload()}> */}
          <Button block bordered  style={styles.FbAndLogBtn} onPress={() =>this.uploadImageLinkFunction(null)
    
     }
      >
            <Text style={styles.textForFband}> Profile Picture upload </Text>
          </Button>
          <Button block bordered  style={styles.FbAndLogBtn} onPress={() =>this.uploadImageLinkFunction('Company')
    
     }
      >
            <Text style={styles.textForFband}>Company Picture upload </Text>
          </Button>
          <View>

<Text onPress={()=>{this.props.navigation.navigate('SignIn')}} style={{  textAlign: 'center',color :'black' , marginLeft : "20%" ,marginTop : '1%' , marginBottom : '1%'  }} > Already have an Account SignIn</Text>

</View>
          </View>

          <View>
            {/* <View>

            <Text style={{  textAlign: 'center',color :'white' , marginLeft : "20%" ,marginTop : '3%' , marginBottom : '6%'  }} >New User ? Sign Up</Text>
             </View> */}
            {/* <Button block  style={{ backgroundColor : 'white'}} onPress={()=>{navigate("tab")}}>
            <Text style={{color : '#65c296' , backgroundColor : 'white'}}>Facebook</Text>
          </Button> */}
          </View>
       </View>
       </View>
 </View>
      </Content>
    </Container>
 

    );
  }



}

const styles = StyleSheet.create({

  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
login :{
  fontSize :  30, 
  color : 'black'
} , 
forget :{
  
} , 
textFBandLog :{
  color : 'black'
} , 
FbAndLogBtn : {
  backgroundColor : '#65c296' , 
  // border : '1px solid  white'
} ,  
textForFband : {
  color : 'white'
} , 
mianView : {
margin : 22
} , 
InterternalView : {
  // marginTop : '3%'
} , 

subHeading :{
  fontSize : 20,
  marginTop : 7
} , 
radio : {
  marginRight : 7 ,
  marginLeft : 7

} ,
check : {
  marginRight : 30
}

});
