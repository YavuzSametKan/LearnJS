class Storage{
    getFilmsFromStorage(){
        let films = (localStorage.getItem("films") === null)?[]:JSON.parse(localStorage.getItem("films"));
        return films;
    }

    addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    deleteFilmFromStorage(filmName){
        let films = this.getFilmsFromStorage();
        films.forEach((film,index)=>{
            if(film.name == filmName){
                films.splice(index,1);
            }
        })
        localStorage.setItem("films",JSON.stringify(films));
    }

    deleteAllFilmFromStorage(){
        localStorage.removeItem("films");
    }
}