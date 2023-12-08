class UI {
    addFilmFromUI(newFilm){
        let filmList = document.querySelector("#films");
        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.banner}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.name}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `; 
    }

    clearInputs(inp1,inp2,inp3){
        inp1.value = "";
        inp2.value = "";
        inp3.value = "";
    }

    loadAllFilms(films){
        films.forEach((film)=>{
            this.addFilmFromUI(film);
        });
    }

    deleteFilmFromUI(deleteBtnTarget){
        deleteBtnTarget.parentElement.parentElement.remove();
    }

    deleteAllFilms(){
        let filmList = document.querySelector("#films");
        while(filmList.childElementCount > 0){
            filmList.firstElementChild.remove();
        }
    }

    Alert(message,type){
        /*
        <div class="alert alert-danger" role="alert">
          Message...
        </div>
        */
        let firstSection = document.querySelector(".card-body");
        let messageDiv = document.createElement("div");
        messageDiv.className = `alert alert-${type}`;
        messageDiv.textContent = message;
        firstSection.appendChild(messageDiv);

        setTimeout(()=>messageDiv.remove(),3500);
    }
}