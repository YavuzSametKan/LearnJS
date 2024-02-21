//? Sorunun kaynağı: https://www.youtube.com/watch?v=DznGpuy-MAQ&t

//* Gereksinimler:
//* 1. Yeni durak ekle butonuna basınca inpGroupsContainer id'sine sahip elemanın altına
//*    inpGroup class'ına sahip div tekrar tekrar alt alta üretilecek
//* 2. Güzergah input'u ve formGroup input'ları doluysa Kaydet butonu aktif aksi durumda pasif olacak

const routeInp = document.getElementById('routeInp') 
const addStationBtn = document.getElementById('addStationBtn')
const saveBtn = document.getElementById('saveBtn')
let stationNameInputs = document.querySelectorAll('.stationNameInp')
let stationLatitudeInputs = document.querySelectorAll('.stationLatitudeInp')
let stationLongitudeInputs = document.querySelectorAll('.stationLongitudeInp')

eventListeners()

function eventListeners(){
    addStationBtn.addEventListener('click', addInputGroup)

    // Event listeners for inputs
    routeInp.addEventListener('input', updateSaveButton)
    for (let i = 0; i < stationNameInputs.length; i++) {
        stationNameInputs[i].addEventListener('input', updateSaveButton)
        stationLatitudeInputs[i].addEventListener('input', updateSaveButton)
        stationLongitudeInputs[i].addEventListener('input', updateSaveButton)
    }

    // Update save button when page loads
    updateSaveButton()
}

function updateSaveButton(){
    saveBtn.disabled = checkAllInputStatus() ? false : true
}

function checkAllInputStatus(){
    if(routeInp.value.length == 0)
        return false

    for (let i = 0; i < stationNameInputs.length; i++) {
        if(stationNameInputs[i].value.length == 0)
            return false
        else if(stationLatitudeInputs[i].value.length == 0)
            return false
        else if(stationLongitudeInputs[i].value.length == 0)
            return false
    }

    return true
}

function addInputGroup(){
    const inpGroup = document.createElement('div')
    inpGroup.classList.add('inpGroup')

    const inputs = {
        stationNameInp: inputGenerator(['stationNameInp'], 'Durak Adı'),
        stationLatitudeInp: inputGenerator(['stationLatitudeInp'], 'Enlem'),
        stationLongitudeInp: inputGenerator(['stationLongitudeInp'], 'Boylam')
    }

    appendChildren(inpGroup, inputs)
    addInputGroupToUI(inpGroup)
    refreshInputsList()
    eventListeners()
} 

function inputGenerator(clases, placeholder, type = 'text'){
    //? The generated input looks like this: <input class="" type="" placeholder="">
    const input = document.createElement('input')
    clases.forEach(_class => input.classList.add(_class))
    input.type = type
    input.placeholder = placeholder

    return input
}

function appendChildren(parentElement ,childrenObj){
    // Iterative appendChild method 
    Object.values(childrenObj).forEach(child => {
        parentElement.appendChild(child)
        //? Move to new line
        parentElement.appendChild(document.createTextNode('\n'))
    })
}

function addInputGroupToUI(inputGroup){
    document.getElementById('inpGroupsContainer').appendChild(inputGroup)
}

function refreshInputsList(){
    stationNameInputs = document.querySelectorAll('.stationNameInp')
    stationLatitudeInputs = document.querySelectorAll('.stationLatitudeInp')
    stationLongitudeInputs = document.querySelectorAll('.stationLongitudeInp')
}