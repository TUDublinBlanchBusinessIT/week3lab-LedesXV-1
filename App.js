import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App(){
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");

  function buttonClicked() {
    Alert.alert("Hello " + fname + " " + lname +" your dob is " + dob); // This works on a mobile phone or the other lines as necessary
}

  return(
    <View> 
      <Logo/>
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
      <Text>Hello {fname} {lname}. You were born on {dob}</Text>

      <Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  )
};
