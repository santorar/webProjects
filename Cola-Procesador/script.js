var listaPreparados = []
var listaTerminados = []
var listaTiempos = []
var cuantum = 5
var currenttime = cuantum
var currenttime = cuantum
//containers
const colaPrep = document.querySelector('.cola-preparados')
const colaProc = document.querySelector('.cola-procesados')
const cuantumContainer = document.querySelector('.cuantum-time')
const currentProcess = document.querySelector('.proceso-procesador')
const processTime = document.querySelector(".process-time")
const sleep = ms => new Promise((r) => setTimeout(r, ms))
//add content to the page
cuantumContainer.textContent = cuantum;

//action listeners
const agregarProceso = () => {
    var name = prompt('ingrese el nombre del proceso');
        var time = parseInt(prompt('ingrese el tiempo del proceso'));
        if(time <= 0){
            alert('tiempo no pude ser menor o igual a 0')
            return
        }
        if(isNaN(time)){
            alert('tiempo invalido')
            return
        }
        listaPreparados.push(name);
        listaTiempos.push(time);
        var html = `<li id="${name}" class="process">${name}</li>`
        colaPrep.innerHTML += html
}
const actualizarColas = ()  => {
    colaPrep.innerHTML = ""
    colaProc.innerHTML = ""
    var html = "";
    if(listaPreparados.length > 0){
        listaPreparados.forEach(process => {
            html = `<li id="${process}" class="process">${process}</li>`
            colaPrep.innerHTML += html
        });
    }
    if(listaTerminados.length > 0){
        listaTerminados.forEach(process => {
            html = `<li id="${process}" class="process">${process}</li>`
            colaProc.innerHTML += html
        });
    }
}
const actualizarCuantum = () => {
    var newcuantum = parseInt(prompt("Ingrese el nuevo cuantum"))
    if(isNaN(newcuantum)){
        alert('cuantum erroneo')
        return
    }
    if(newcuantum <= 0){
        alert('cuantum no puede ser menor o igual a 0')
    }
    cuantum = newcuantum
    cuantumContainer.textContent = cuantum
    currenttime = cuantum
}
const reset = () => {
    location.reload()
}
 async function cicloDeProceso() {
    for (let i = 0; i < cuantum; i++) {
        await sleep(1000)
        currenttime--
        if(listaTiempos[0] > 0){
            listaTiempos[0]--
        }
        cuantumContainer.textContent = currenttime
        processTime.textContent = listaTiempos[0]
    }
    var currentP = listaPreparados.shift()
    if(listaTiempos[0] > 0){
        var currentT = listaTiempos.shift()
        listaPreparados.push(currentP)
        listaTiempos.push(currentT)
    }else{
        listaTerminados.push(currentP)
        listaTiempos.shift()
    }
    actualizarColas()
}
const startProcess = async () => {
    if(listaPreparados.length < 1 && listaTerminados.length < 1){
        alert("no hay procesos")
        return
    }
    while(listaTiempos.length >= 1){
        currentProcess.textContent = `${listaPreparados[0]}`
        currenttime = cuantum
        cuantumContainer.textContent = currenttime
        processTime.textContent = listaTiempos[0]
        await cicloDeProceso()
    }
}
//button selectors
const addButton = document.querySelector(".add")
const resetButton = document.querySelector(".reset")
const cuantumButton = document.querySelector(".cuantum-change")
const startbutton = document.querySelector(".start")
//button listeners
addButton.addEventListener('click',agregarProceso)
cuantumButton.addEventListener('click', actualizarCuantum)
resetButton.addEventListener('click', reset)
startbutton.addEventListener('click',startProcess)