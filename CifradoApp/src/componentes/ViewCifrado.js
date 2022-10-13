import React, { Component } from 'react';
import { Text,View, TextInput,Button,StyleSheet } from 'react-native';

class ViewCifrado extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mensajeCifrado: "",
      text : ""
    };
    this.onCifrar = this.onCifrar.bind(this);
    
  }
  
  onCifrar() {
    if (this.props.onCifrarString) {
      var resultMensajeCifrado = this.props.onCifrarString(this.state.text);
      this.setState({mensajeCifrado: resultMensajeCifrado});
    }  
  }

  render() {
    return (
      <View style={style.card}>
      <Text>{this.props.title}</Text>
      <TextInput style={style.input} onChangeText={newText=>this.setState({text : newText}) }></TextInput>
      <Button title="Cifrar"  onPress={this.onCifrar}></Button>
      <Text>Mensaje Cifrado: {this.state.mensajeCifrado}</Text>
      </View>
      
    );
  }
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
    width: '90%'
  }
});

export default ViewCifrado;