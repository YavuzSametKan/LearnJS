import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

const editBtn = document.getElementById('editBtn')
const timeZoneSelectModal = document.getElementById('timeZoneSelectModal')
const applyBtn = document.getElementById('applyBtn')
const clock = document.getElementById('currentTime')
const dateInfo = document.getElementById('currentDate')
const timeZoneSelect = document.querySelector('#selectContainer select')
const timeZoneInfo = document.querySelector('#timeZone span')
const cursor = document.getElementById('cursor')

main()

function main(){
    editBtn.addEventListener('click', openModal)
    timeZoneSelectModal.addEventListener('click', whiteSpaceIsClicked)
    applyBtn.addEventListener('click', setTimeZone)
    updateClock()
    setInterval(updateClock, 1000)
    setDateInfo()
    setTimeZoneInfo()

    //cursor functions
    document.addEventListener('mousemove',
    e => cursor.setAttribute('style', `left: ${e.pageX - 20}px; top: ${e.pageY - 20}px;`))
    
    document.addEventListener('click', () => {
        cursor.classList.add('click')
        setTimeout(() => cursor.classList.remove('click'), 500)
    })
}

function updateClock(){
    let tz = getTzFromStorage()
    let now = (tz != 'Your Timezone')
    ? dayjs().tz(tz)
    : dayjs()

    let currentHour = now.hour() < 10 ? "0" + now.hour() : now.hour()
    let currentMinute = now.minute() < 10 ? "0" + now.minute() : now.minute()
    let currentSecond = now.second() < 10 ? "0" + now.second() : now.second()
    
    clock.innerHTML  = currentHour + ':' + currentMinute + ':' + currentSecond
}

function setDateInfo(){
    let tz = getTzFromStorage()
    let now = (tz != '' && tz != 'Your Timezone')
    ? dayjs().tz(tz)
    : dayjs()

    let dateOfMount = now.date() // 1-31
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dateOfWeek = days[now.day()] // Sunday, Monday, ...
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[now.month()] // January, February, ...
    let year = now.year() // 2024

    dateInfo.innerHTML = `${dateOfWeek}, ${dateOfMount} ${month}, ${year}`
}

function setTimeZoneInfo(){
    timeZoneInfo.innerHTML = getTzFromStorage()
}

function setTimeZone(){
    setTzToStorage(timeZoneSelect.value)
    updateClock()
    setTimeZoneInfo()
    setDateInfo()
    closeModal()
}

function setTzToStorage(tz){
    localStorage.setItem('selectedTimezone', tz)
}

function getTzFromStorage(){
    let tz = localStorage.getItem('selectedTimezone')
    if (!tz || tz == 'Your Timezone') {
        tz = Intl.DateTimeFormat().resolvedOptions().timeZone //? local timezone
        setTzToStorage(tz)
    }
    return tz
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