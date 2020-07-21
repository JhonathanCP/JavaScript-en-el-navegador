/* -------------------------------------------------------------------------- */
/*                               DOM TRAVERSING                               */
/* -------------------------------------------------------------------------- */

const parent = document.getElementById('parent')
const grandson = document.getElementById('grandson-2')

/* HIJOS */
console.log(parent)
/* childNodes devuelve todos los hijos*/

/* children solo devuelve elementos */
console.log(parent.children)
/* TODOS LOS HIJOS */
console.log(parent.querySelectorAll('div'))
/* primer hijo */
console.log(parent.firstElementChild)
/* último hijo */
console.log(parent.lastElementChild)
/* Tiene hijos? */
console.log(parent.hasChildNodes())

/* HERMANOS */
console.log(grandson.nextElementSibling)
console.log(grandson.previousElementSibling)

/* PADRES */
console.log(grandson.parentElement)

/* -------------------------------------------------------------------------- */
/*                               INSERT BEFORE()                              */
/* -------------------------------------------------------------------------- */

/* Insertar */
const newElement = document.createElement('h2')
newElement.textContent = 'Soy un nuevo elemento'
const childs = Array.from(parent.children)
parent.appendChild(newElement)
/* insertBefore() */
parent.insertBefore(newElement, childs[2])
/* obtener el del medio */
const post = document.getElementById('post')
const postParagraphs = post.querySelectorAll('p')
const ad = document.createElement('div')
ad.id = "publicity"
ad.textContent = "PUBLICIDAD"
const getMiddleItem = e => {
    const paragraph = e.children
    const l = paragraph.length
    const index = Math.floor(l/2)
    return paragraph[index]
}

const middleItem = getMiddleItem(post)
post.insertBefore(ad,middleItem)
/* -------------------------------------------------------------------------- */
/*                               INSERT ADJACENT                              */
/* -------------------------------------------------------------------------- */

/* insertAdjacentElement */

/* beforbegin//hermano anterior */
/* afterbegin//primer hijo */
/* beferoend//último hijo */
/* afterend//siguiente hermano */
const ha = document.createElement('div')
ha.id = "publicity"
ha.textContent = "HermanoAnterior"
const hs = document.createElement('div')
hs.id = "publicity"
hs.textContent = "HermanoSiguiente"
const ph = document.createElement('div')
ph.id = "publicity"
ph.textContent = "PrimerHijo"
const uh = document.createElement('div')
uh.id = "publicity"
uh.textContent = "ÚltimoHijo"
const element = document.getElementById('element')
element.insertAdjacentElement('beforebegin',ha)
element.insertAdjacentElement('afterend',hs)
element.insertAdjacentElement('afterbegin',ph)
element.insertAdjacentElement('beforeend',uh)
/* insertAdjacentText, inserta texto */
/* insertAdjacentHTML, inserta código html */

/* -------------------------------------------------------------------------- */
/*                                REPLACE CHILD                               */
/* -------------------------------------------------------------------------- */
/* replaceChild(newchild, oldchild) */
element.replaceChild(ad,element.children[1])
/* CLONE Y REMOVE */
/* element.remove() */
/* element.cloneNode(true) */

/* -------------------------------------------------------------------------- */
/*                        CREAR ELEMENTOS Y FRAGEMENTOS                       */
/* -------------------------------------------------------------------------- */
/* createElement() */
/* createDocumentFragment() */
/* const pets = ['Pelusa', 'Scott', 'Mía', 'Lulu', 'Charly']
const petList = document.createElement('ul')
const petListContainer = document.getElementById('pet-list')
petListContainer.appendChild(petList)
for (let pet of pets){
    const li = document.createElement('li')
    li.textContent = pet
    petList.appendChild(li)    
} */
/* Más eficiente */
const pets = ['Pelusa', 'Scott', 'Mía', 'Lulu', 'Charly']
const petList = document.createElement('ul')
const petListContainer = document.getElementById('pet-list')
const petListFragment = document.createDocumentFragment()
petListContainer.appendChild(petList)
for (let pet of pets){
    const li = document.createElement('li')
    li.textContent = pet
    petListFragment.appendChild(li)
}
petList.appendChild(petListFragment)

/* -------------------------------------------------------------------------- */
/*                                  TEMPLATES                                 */
/* -------------------------------------------------------------------------- */
/* Son plantillas reutilizables */
const template = document.getElementById('template')
const myNewTemplate = template.content.cloneNode(true)
myNewTemplate.querySelector('h2').textContent = 'Soy un h2 del template'
myNewTemplate.querySelector('p').textContent = 'Soy un p del template'
document.getElementById('template-content').appendChild(myNewTemplate)
