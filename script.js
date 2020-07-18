/* -------------------------------------------------------------------------- */
/*                                    NODOS                                   */
/* -------------------------------------------------------------------------- */

/* Propiedades de NODOS */
/* .nodeType() devuelve 1 es elemento */
/* .nodeType() devuelve 2 es atributo */
/* .nodeType() devuelve 3 es texto */
/* .nodeType() devuelve 8 es comentario */
/* .nodeName() devuelve el nombre de la etiqueta en upperCase*/
/* .childNodes devuelve los nodos hijos */
/* ELEMENTO
    Un elemento es toda etiqueta HTML completa */
    /* <h1>Title</h1> */

/* -------------------------------------------------------------------------- */
/*                             SELECCION DE NODOS                             */
/* -------------------------------------------------------------------------- */
/* Selector de ID */    
console.log(document.getElementById('title'))
/* Selectores de CSS */ /* No devuelven arrays */
/* Para volverlos array usar Array.from() */
/* .querySelector() o .querySelectorAll() */
/* puede partir de un document o elemento */
const listItems = document.querySelectorAll('#unorderedList li')
console.log(listItems)

/* -------------------------------------------------------------------------- */
/*                                  ATRIBUTOS                                 */
/* -------------------------------------------------------------------------- */

/* getAttribute() */
/* Obtiene el valor del atributo pasado por parámetro */
const title = document.getElementById('title')
console.log(title.getAttribute('class'))
/* setAttribute() */
/* Define un atributo */
const title = document.querySelector('h1')
title.setAttribute('id','title')
console.log(title.getAttribute('id'))
/* Modificadores de clases */
title.classList.add('main-title', 'product')
title.classList.remove('title')
/* toggle si la tiene la quita sino la añade */
title.classList.toggle('title')

/* -------------------------------------------------------------------------- */
/*                                  CONTENIDO                                 */
/* -------------------------------------------------------------------------- */

const title = document.querySelector('h1')
/* Contenido */
console.log(title.textContent)/* Devuelve EL DOM */
/* INNERHTML */
console.log(title.innerHTML)/* EL DOM */ /* Pero si tiene codigo HTML como hijo también lo devuelve */
/* outerHTML */
console.log(title.outerHTML)/* Devuelve el elemento */
/* <h1 id="title">El DOM</h1> */
/* TAMBIÉN SE PUEDEN USAR PARA ESCRIBIR */

/* -------------------------------------------------------------------------- */
/*                               CREAR ELEMENTOS                              */
/* -------------------------------------------------------------------------- */
/* Solo en memoria */
const profesor = document.createElement('p')

profesor.textContent = 'Alexys Lozada'
profesor.classList.add('teacher')
profesor.id = 'teacher'
/* PARA CONSOLIDARLO */
document.body.appendChild(profesor)/* Lo inserta al final */
/* Para agregarlo en un lugar especifico */
const profesorContainer = document.getElementById('teacher')
if(profesorContainer && profesorContainer.querySelector('span')) {
    profesorContainer.querySelector('span').appendChild(profesor)
}

/* -------------------------------------------------------------------------- */
/*                                   EVENTOS                                  */
/* -------------------------------------------------------------------------- */

const title = document.getElementById('title')

/* title.addEventListener('eventName', eventHandler) */
/* UNA FORMA */
/* title.addEventListener('click', ()=>{
    alert('Hola mundo')
}) */
const holaMundo = () => alert('Hola mundo')

title.addEventListener('click', holaMundo)

/* Otra forma */

const holaMundo2 = text => alert(text)

title.addEventListener('click', ()=>{
    holaMundo2('evento')
})

/* Devolviendo lo requerido por el elemento del DOM donde ocurre el evento */

const holaMundo2 = text => alert(text)

title.addEventListener('click', e=>{
    holaMundo2(e.target.textContent)
})

/* Optimizado */

const holaMundo2 = e => alert(e.target.textContent)

title.addEventListener('click', e=>{
    holaMundo2(e)
})

/* EVENTOS DEL MOUSE */
/* click 
    dbclick
    mouseenter
    mouseleave
    contextmenu(clickderecho, se hace uno previo del .preventDefault())
*/

/* EVENTOS DEL TECLADO */
/* 
    keydown
    keyup
    keypress
*/

/* EVENTOS DE FORMULARIO */
/* 
    submit
    change(cuando un imput cambia de valor)
    focus
    blur(ambos para busqueda)
    reset
*/

/* EVENTOS DEL DOM */
/* 
    DOMContentLoaded(Carga todo el contenido después de que se haya cargado el DOM)
*/

/* EVENTOS DEL NAVEGADOR */
/* 
    loaded(similar a DOMContentLoaded)
    scroll
    resize
*/

/* PROPAGACIÓN DE EVENTOS */
/* Los eventos siempre se propagan a los superiores */
e.stopPropagation()/* Elimina la propagación */

/* DELEGACIÓN DE EVENTOS */