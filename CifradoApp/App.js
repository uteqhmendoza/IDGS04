import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import ViewCifrado from './src/componentes/ViewCifrado';
import ViewCifradoRedux from './src/componentes/ViewCifradoRedux';
import { ServicioCifrado } from './src/Servicios/ServicioCifrado';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import cifradoReducer from './src/reducers/cifradoReducer';
import { cifrarSimetrico,onHashMD5 } from './src/actions/CifradoActions';

const store = createStore(cifradoReducer);


export default function App() {
  const servicioCifrado = new ServicioCifrado("IDGS04");

  const onCifrarString = (mensaje) => {
    return servicioCifrado.encriptar(mensaje);
  };

  const onHashMD5String = (mensaje) => {
    return servicioCifrado.toMD5(mensaje);
  };

  return (
    <Provider store={store}>
    <View style={styles.container}>   
      <ViewCifrado 
        title="Cifrado Simetrico"
        onCifrarString={onCifrarString}>
      </ViewCifrado>
    
      <ViewCifrado 
        title="Hash MD5"
        onCifrarString={onHashMD5String}>
      </ViewCifrado>

      <ViewCifradoRedux
      title="Cifrado Simetrico Redux"
      action={cifrarSimetrico}
      > </ViewCifradoRedux>
      <ViewCifradoRedux
      title="Hash MD5 Redux"
      action={onHashMD5}
      > </ViewCifradoRedux>
    <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
