
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text,View, TextInput,Button,StyleSheet } from 'react-native';

const ViewCifradoRedux = (props) => {
  const dispatch = useDispatch();
  const mensajeCifrado  = useSelector((state) =>  state.text);
  const [text,setText] = useState('');
  const handlePress = () => {
    console.log(text)
    dispatch(props.action(text)); 
  };
  
  return (
      <View style={style.card}>
      <Text>{props.title}</Text>
      <TextInput style={style.input} onChangeText={t => setText(t)} ></TextInput>
      <Button title="Cifrar"  onPress={handlePress}></Button>
      <Text>Mensaje Cifrado: {mensajeCifrado}</Text>
      </View>    
    );

}

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
  card: {
    backgroundColor :'lightgrey',
    padding:20,
    borderRadius : 20,
    margin:10,
    width : '90%'
  }
});

export default ViewCifradoRedux;
