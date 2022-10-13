import { ServicioCifrado } from "../Servicios/ServicioCifrado";
import {CIFRAR_SIMETRICO,DESCIFRAR_SIMETRICO,CIFRAR_HASMD5,CIFRAR_SHA256}  from '../actions/CifradoActions'
const initialState = {
    text: "",
  };

const servicioCifrado = new ServicioCifrado("IDGS04");
  export default (state = initialState, action) => {
    switch (action.type) {
      case CIFRAR_SIMETRICO:
        return {
          ...state,
          text:
           servicioCifrado.encriptar(action.text),
        }
    
      case DESCIFRAR_SIMETRICO:
        return {
          ...state,
          text: servicioCifrado.desencriptar(action.text),
        };
        case CIFRAR_HASMD5:
        return {
          ...state,
          text: servicioCifrado.toMD5(action.text),
        };
        case CIFRAR_SHA256:
        return {
          ...state,
          text: servicioCifrado.toSHA256(action.text),
        };
      default:
        return state;
    }
  };