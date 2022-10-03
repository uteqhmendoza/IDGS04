
var CryptoJS = require("crypto-js");
class ServicioCifrado {
     constructor(key) {
      /*  if (!((new Error).stack.indexOf("getInstance") > -1)) {
            throw new Error("Constructor is private. Use static method getInstance.");  
        } 
        this.constructor.instance = this;
        
        this.size = 1;*/
        this.secretKey = key;
    }  
    
    
    
    encriptar(mensaje) {
        return CryptoJS.AES.encrypt(mensaje, this.secretKey).toString();
        
    }

    desencriptar(mensajeCifrado) {
        var bytes  = CryptoJS.AES.decrypt(mensajeCifrado, this.secretKey);
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedData;
    }

}

export  { ServicioCifrado };