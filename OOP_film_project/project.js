let filmForm = document.querySelector("#film-form");
let filmNameInput = document.querySelector("#name");
let directorInput = document.querySelectorAll(".form-control")[1];
let bannerInput = document.querySelectorAll(".form-control")[2];
let addFilmBtn = document.querySelectorAll(".btn")[0];
let clearAllFilmsBtn = document.querySelectorAll(".btn")[1];
let filmList = document.querySelector("#films");

let ui = new UI();
let storage = new Storage();

eventListeners();

function eventListeners(){
    filmForm.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",()=>{
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    filmList.addEventListener("click",deleteFilm);
    clearAllFilmsBtn.addEventListener("click",deleteAllFilms);
}

function addFilm(e){
    let newFilmAttr = {
        name : filmNameInput.value.trim(),
        director : directorInput.value.trim(),
        banner : bannerInput.value.trim()
    }

    
    if(newFilmAttr.name == "" || newFilmAttr.director == "" || newFilmAttr.banner == ""){
        ui.Alert("Lütfen bütün kutucukları doldurunuz.", "danger");
    }
    else if(!isURL(newFilmAttr.banner)){
        ui.Alert("Lütfen geçerli bir afiş url'i giriniz.", "danger")
    }
    else{
        let newFilm = new Film(newFilmAttr.name, newFilmAttr.director, newFilmAttr.banner);
        ui.addFilmFromUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.Alert(newFilmAttr.name + " Film'i başarıyla listeye eklendi.", "success");
    }
    ui.clearInputs(filmNameInput,directorInput,bannerInput);
    e.preventDefault();
}

function isURL(str) {
    const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // Protokol kısmı (http:// veya https://)
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Alan adı
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP adresi
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port ve yol
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Sorgu stringi
        '(\\#[-a-z\\d_]*)?$',
        'i'
      );
    return urlPattern.test(str);
}

function deleteFilm(e){
    if(e.target.id == "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.Alert(e.target.parentElement.previousElementSibling.previousElementSibling.textContent + " filmi başarıyla silindi.", "success");
    } 
}

function deleteAllFilms(){
    if(confirm("Tüm filmleri silmek istediğinize emin misiniz?")){
        ui.deleteAllFilms();
        storage.deleteAllFilmFromStorage();
        ui.Alert("Filmlerin hepsi bağarıyla silindi.", "success");
    }
}
