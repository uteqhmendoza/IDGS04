
export const CIFRAR_SIMETRICO = 'CIFRAR_SIMETRICO'
export const DESCIFRAR_SIMETRICO = 'DESCIFRAR_SIMETRICO'
export const CIFRAR_HASMD5 = 'CIFRAR_HASMD5'
export const CIFRAR_SHA256 = 'CIFRAR_SHA256'


export function cifrarSimetrico(mensaje) {
    return { type: CIFRAR_SIMETRICO, text: mensaje }
  }

  export function descifrarSimetrico(mensaje) {
    return { type: DESCIFRAR_SIMETRICO 
    , text: mensaje }
  } 

  export function onHashMD5(mensaje) {
    return { type: CIFRAR_HASMD5 
    , text: mensaje }
  } 

  export function onHashSHA256(mensaje) {
    return { type: CIFRAR_SHA256 
    , text: mensaje }
  }

