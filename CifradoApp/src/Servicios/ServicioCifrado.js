
var CryptoJS = require("crypto-js");
class ServicioCifrado {
     constructor(key) {
    
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

    toSHA256(mensaje) {
        return CryptoJS.SHA256(mensaje).toString(CryptoJS.enc.Base64);
    }

    toMD5(mensaje) {
        return CryptoJS.MD5(mensaje).toString(CryptoJS.enc.Base64);
    }

}

export  { ServicioCifrado };