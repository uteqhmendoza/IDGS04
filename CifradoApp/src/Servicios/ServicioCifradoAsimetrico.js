
import { JSEncrypt } from "jsencrypt";

const SifradoAsimetrico = function (publicKey, privateKey) {
    var encrypt = new JSEncrypt();
    this.encrypt.setPublicKey(publicKey);
    this.decrypt.setPrivateKey(privateKey);
    this.encriptar = (mensaje) => { 
        encrypt.encrypt(mensaje)
    } 

    this.desencriptar = (mensajeCifrado) => { 
        encrypt.decrypt(mensajeCifrado)
    }

    
}