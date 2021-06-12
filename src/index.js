import {reemplazar, limpiar} from './js/componentes';
import './styles.css';

let btnBuscar=document.querySelector('#btn-buscar');
let btnLimpiar=document.querySelector('#btn-limpiar');
    
btnBuscar.addEventListener('click',()=>{
reemplazar();
})

btnLimpiar.addEventListener('click',()=>{
 limpiar();
})

  

    




