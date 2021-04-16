arrayzinha = []
let trickNumber = 0;

const parametros = window.location.search.split("=")
parametros[0] = parametros[0].replace("?","") 
console.log(parametros)

if(parametros[0] === 'trick') {
    trickNumber = parseInt(parametros[1])
}

function mapArray() {
    const trick = document.querySelector('#trick')
    const {name, image, description, siteswap, difficult, preRequisites, balls } = arrayzinha[trickNumber]
    return {
        name,
        image,
        description,
        siteswap,
        difficult,
        preRequisites,
        balls
    }
}
function makeDescription(info) {
    const description = info.map(a => {
        if(a.tag === 'P'){
            return `
            <p>
            ${a.texto}
            </p>
            `
        }
        else {
            return `
            <img src='${a.texto}'>
            `
        }
    })

    return description.join('')
}
function popula (array) {
    const description = makeDescription(array.description)
    trick.innerHTML = `
    <h1 id='name'>${array.name}</h1>
    <img src=${array.image}>
    <table>
        <tr>
            <th>Siteswap:</th>
            <td>${array.siteswap}</>
        </tr>
        <tr>
            <th>Number of balls:</th>
            <td>${array.balls}</>
        </tr>
        <tr>
            <th>Difficult:</th>
            <td>${array.difficult}</>
        </tr>
        <tr>
            <th>Pre Requisites:</th>
            <td>${array.preRequisites}</>
        </tr>
    </table>
    <h2>Description</h2>
    ${description}
    ` 
}

async function buscaJson() {
    await fetch('./dados.json')
    .then(response => response.json())
    .then(obj => arrayzinha = obj)
    .then(() => popula(mapArray()))
}

buscaJson()
