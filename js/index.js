// ------------------------------------------------------------------------------------------------------
// ESTA SECCION PERTENECE A LA PREGUNTA 2   INICIO
const ocultar = () => {
    document.getElementById('primeraParte').setAttribute('class','d-none')
    // SE BUSCA EL DIV 'primeraParte' y se le agrega la clase d-none = display : none
}
const mostrar = () => {
    document.getElementById('primeraParte').setAttribute('class','')
    // SE BUSCA EL DIV 'primeraParte' y se le agrega la clase "", lo cual elimina el d-none
}
// ESTA SECCION PERTENECE A LA PREGUNTA 2   FIN
// ------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------
// ESTA SECCION PERTENECE A LA PREGUNTA 3   INICIO
const sumar = () => {
    // Se guardan todos los valores en variables constantes de las cajas input
    const n01 = document.getElementById('input_01').value
    const n02 = document.getElementById('input_02').value
    const n03 = document.getElementById('input_03').value
    const n04 = document.getElementById('input_04').value
    const n05 = document.getElementById('input_05').value
    // Se crea una variable constanten "respuesta" en la que se realizara la operacion requerida
    const respuesta = parseInt(n01) + parseInt(n02) + parseInt(n03) + parseInt(n04) + parseInt(n05)
    // Se agrega el valor de la variable "respuesta" a la caja input "cajita" y se finaliza la funcion
    document.getElementById('cajita').value = respuesta
}
const restar = () => {
    // Se guardan todos los valores en variables constantes de las cajas input
    const n01 = document.getElementById('input_01').value
    const n02 = document.getElementById('input_02').value
    const n03 = document.getElementById('input_03').value
    const n04 = document.getElementById('input_04').value
    const n05 = document.getElementById('input_05').value
    // Se crea una variable constanten "respuesta" en la que se realizara la operacion requerida
    const respuesta = parseInt(n01) - parseInt(n02) - parseInt(n03) - parseInt(n04) - parseInt(n05)
    // Se agrega el valor de la variable "respuesta" a la caja input "cajita" y se finaliza la funcion
    document.getElementById('cajita').value = respuesta
}
// ESTA SECCION PERTENECE A LA PREGUNTA 3   FIN
// ------------------------------------------------------------------------------------------------------



const main = () => {
    // ------------------------------------------------------------------------------------------------------
    // ESTA SECCION PERTENECE A LA PREGUNTA 2   INICIO
    document.getElementById("botonOcultar").addEventListener("click",ocultar)
    // Se le agrega un escuchador al boton ocultar para que realice la funcion "ocultar" cada que sea presionado
    document.getElementById("botonMostrar").addEventListener("click",mostrar)
    // Se le agrega un escuchador al boton mostrar para que realice la funcion "mostrar" cada que sea presionado
    // ESTA SECCION PERTENECE A LA PREGUNTA 2   FIN
    // ------------------------------------------------------------------------------------------------------
    
    
    
    // ------------------------------------------------------------------------------------------------------
    // ESTA SECCION PERTENECE A LA PREGUNTA 3   INICIO
    document.getElementById("botonSuma").addEventListener("click",sumar)
    // Se le agrega un escuchador al boton suma para que realice la funcion "sumar" cada que sea presionado 
    document.getElementById("botonResta").addEventListener("click",restar)
    // Se le agrega un escuchador al boton resta para que realice la funcion "restar" cada que sea presionado 
    // ESTA SECCION PERTENECE A LA PREGUNTA 3   FIN
    // ------------------------------------------------------------------------------------------------------
}
window.addEventListener('load',main)