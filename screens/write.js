import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image, TextInput} from 'react-native';
import * as firebase from 'firebase'
import db from '../config'

export default class writeStory extends React.Component {
    constructor(){
      super();
      this.state = {
        hasCameraPermissions: null,
        scanned: false,
        buttonState: 'normal',
        scannedBookID:'',
        scannedStudentID:'',
      }
    }

    getCameraPermissions = async () =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      
      this.setState({
        /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
        hasCameraPermissions: status === "granted",  
        buttonState: 'clicked',
        scanned: false
      });
    }

    

    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;


      if (buttonState !== "normal" && hasCameraPermissions){
        return(
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      }

      else if (buttonState === "normal"){
        return(
          <View style={styles.container}>
            <View style={{backgroundColor:'#00AAFF',padding:30}}>
              <Text style={{color:'white',textAlign:'center',fontSize:30}}>Story Hub</Text>
            </View>
            <TextInput placeholder={'Title'} style={{
              borderWidth:2,
              width:200,
              marginTop:30,
              marginLeft:20,
              textAlign:'center'
              }}></TextInput>
              <TextInput placeholder={'Author'} style={{
              borderWidth:2,
              width:200,
              marginTop:30,
              marginLeft:20,
              textAlign:'center'
              }}></TextInput>
              <TextInput placeholder={'Story'}
              style={{
              borderWidth:2,
              width:350,
              height:400,
              marginTop:30,
              marginLeft:20,
              textAlign:'center',
              textAlignVertical:'top',
              paddingHorizontal:20,
              }}></TextInput>
              <TouchableOpacity style={{
                alignSelf:'center',
                marginTop:20,
                backgroundColor:'#00AAFF',
                width:100,
                height:50,
                borderRadius:20
              }}
            ><Text style={{
              textAlign:'center',fontSize:20,marginTop:10
              }}>Submit</Text></TouchableOpacity>
        </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding:0
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10,
      width:100,
      height:50
    },
    buttonText:{
      fontSize: 10,
    },
    inputBox:{
      width:250,
      height:50,
      borderWidth:2,
    }
  });