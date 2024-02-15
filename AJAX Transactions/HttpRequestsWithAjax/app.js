class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //Get Request

    get(url,callback){
        this.xhr.open("GET",url);

        this.xhr.onload = () => {
            if(this.xhr.status == 200) //? status is 200 and response status is 4
                callback(null,JSON.parse(this.xhr.responseText)); // request is finish
            else
                callback("GET Request: bir hata oluştu!",null);
        }

        this.xhr.send();

    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-Type","application/json"); // send to JSON data 

        this.xhr.onload = () => {
            if(this.xhr.status == 201) //? status is 201 (the request has succeded and a new resource has been created) and response status is 4
                callback(null,this.xhr.responseText);
            else
                callback("POST Request: bir hata oluştu!",null);
        }
        
        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-Type","application/json"); // send to JSON data 

        this.xhr.onload = () => {
            if(this.xhr.status == 200) //? status is 200 and response status is 4
                callback(null,this.xhr.responseText);
            else
                callback("PUT Request: bir hata oluştu!",null);
        }
        
        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){
        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {
            if(this.xhr.status == 200) //? status is 200 and response status is 4
                callback(null,"Veri silme işlemi başarılı!"); // request is finish
            else
                callback("DELETE Request: bir hata oluştu!",null);
        }

        this.xhr.send();

    }
}

let request = new Request();
//? datas are getting
//request.get("https://jsonplaceholder.typicode.com/albums", (err,response) => (err === null) ? console.log(response) : console.log(err));
//? data is creating
//request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},(err,response) => (err === null) ? console.log(response) : console.log(err));
//? data is updating
//request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:12,title:"Yavuz Samet Kan"},(err,response) => (err === null) ? console.log(response) : console.log(err));
//? data is deleted
request.delete("https://jsonplaceholder.typicode.com/albums/10", (err,response) => (err === null) ? console.log(response) : console.log(err));