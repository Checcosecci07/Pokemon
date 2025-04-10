const container = document.querySelector('#container')

async function Estrazione(dato){
    const response = await fetch(dato)
    const date = response.json()
}