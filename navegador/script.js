/* -------------------------------------------------------------------------- */
/*                                OBJETO WINDOW                               */
/* -------------------------------------------------------------------------- */
/* OBJETO MÁS ALTO NIVEL */
/* Métodos */
console.log('ra')
alert('RAAAAA')
let userResponse = confirm('Ya, pero eres o no eres?')
let userArmy = prompt('De qué army eres papi?')

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
location.href/* lectura y escritura */
location.host/* dominio */
location.pathname/* url-dominio */
/* HISTORY */
/* detecta el atrás y adelante */
/* back() */
/* forward() */
/* go() */

/* -------------------------------------------------------------------------- */
/*                                    TIMER                                   */
/* -------------------------------------------------------------------------- */
let contador = 0
setTimeout(()=>{
    alert('Me ejecuté después de 10 segundos')
},10000)
const saludar = setInterval(() => {
    contador++
    console.log('Hola '+ contador + ' vez')
    if(contador === 10){
        clearInterval(saludar)
    }
}, 2000);

/* -------------------------------------------------------------------------- */
/*                                    DATE                                    */
/* -------------------------------------------------------------------------- */
const now = new Date()
alert(now)
const aniversario = new Date(2000,4,21,20,30,12)
console.log(aniversario)
/* getFullYear //Año */
/* getDay */
/* getMonth */
/* getTime */
/* getTimeZoneOffset */