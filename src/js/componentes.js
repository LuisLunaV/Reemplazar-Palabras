
export const limpiar=()=>{
let texto     =document.querySelector('#texto'),
    buscar    =document.querySelector('#buscar-text'),
    reemplazar=document.querySelector('#reemplazar-text');    

    texto.value='';
    buscar.value='';
    reemplazar.value='';
}

export const reemplazar=()=>{
    let texto     =document.querySelector('#texto'),
        buscar    =document.querySelector('#buscar-text'),
        reemplazar=document.querySelector('#reemplazar-text');

  
   let cadenaTexto   =texto.value;

   const palabra     =buscar.value,
         nuevaPalabra=reemplazar.value;

   if(palabra.trim().length>0 && nuevaPalabra.trim().length>0){

   if(cadenaTexto.length>0){
    
let splitCadena=cadenaTexto.split(' ');

let nuevaCadena =splitCadena.map(elem=> elem.replace(palabra, nuevaPalabra));

texto.value=nuevaCadena.join(' ');;

 

}
}
}

    