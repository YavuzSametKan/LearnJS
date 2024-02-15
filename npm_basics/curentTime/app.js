const editBtn = document.getElementById('editBtn')
const timeZoneSelectModal = document.getElementById('timeZoneSelectModal')
const applyBtn = document.getElementById('applyBtn')
const clock = document.getElementById('currentTime')

functionTriggers()

function functionTriggers(){
    editBtn.addEventListener('click', openModal)
    timeZoneSelectModal.addEventListener('click', whiteSpaceIsClicked)
    applyBtn.addEventListener('click', setTimeZone)
}

function openModal(){
    timeZoneSelectModal.style.opacity = '1'
    timeZoneSelectModal.style.pointerEvents = 'all'
}

function closeModal(){
    timeZoneSelectModal.style.opacity = '0'
    timeZoneSelectModal.style.pointerEvents = 'none'
}

function whiteSpaceIsClicked(e){
    if(timeZoneSelectModal.style.opacity === '1' && e.target.id === 'timeZoneSelectModal')
        closeModal()
}

const dayjs = require('dayjs');

function updateClock(){
    var currentHour = dayjs.hour()
    var currentMinute = dayjs.minute()
    var currentSecond = dayjs.second()
    clock.innerHTML  = currentHour + ':' + currentMinute + ':' + currentSecond
}

setInterval(updateClock, 1000)

updateClock()

function setTimeZone(){
    closeModal()
}