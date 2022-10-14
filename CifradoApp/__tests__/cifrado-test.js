import { ServicioCifrado} from '../src/Servicios/ServicioCifrado'
var CryptoJS = require("crypto-js");

var mensaje = "Hola Mundo";
var servicioCifrado = new ServicioCifrado("IDGS03");
var mensajeCifrado = "";

it("encriptando mensaje",()=> {  
   mensajeCifrado = servicioCifrado.encriptar(mensaje); 
   console.log(mensajeCifrado);
   expect(mensajeCifrado).not.toBe(mensaje)
  })

  it("desencriptando mensaje",()=> {   
    expect(servicioCifrado.desencriptar(mensajeCifrado)).toBe(mensaje)
  })

 