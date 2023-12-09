//* Most Popular HTTP Status Codes 
//?     200 : OK
//?     403 : Forbidden
//?     404 : Not Found
//?     505 : Internal Server Error

//* XHR.readyState
//?     Holds the status of the XMLHttpRequest (XML)
//?         0 : request not initialized (istek başlatılmadı)
//?         1 : server connection established (sunucu bağlantısı kuruldu)
//?         2 : request received (istek alındı)
//?         3 : processing request (istek işlendi)
//?         4 : request finished and response is ready (istek tamamlandı ve yanıt hazır)

document.querySelector("#btn").addEventListener("click",()=>{

    //? XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    //? params: Request Type, file path, this transaction is asynchronous (true or false)
    xhr.open("GET","example.txt",true);

    xhr.send();

    //* New Method
    xhr.onload = ()=>{
        //? Run this function when the response is 4 [the response is ready]. (yanıt 4 [yanıt hazır] olduğunda çalışır) 
        if(xhr.status == 200){
            //? The response is ready    
            console.log(`Response Text: "${xhr.responseText}", Ready State: ${xhr.readyState}`);
            //? Write message to html document
            document.querySelector("#message").textContent = xhr.responseText;
        }
    }

    //! Old method
    /*
    xhr.onreadystatechange = ()=>{
        if(xhr.status == 200 && xhr.readyState == 4){
            //? The response is ready
            console.log(xhr.responseText);
        }
    }
    */

    xhr.onprogress = ()=>{
        //? Run this function when the response is 3 [the response is processing]. (yanıt 3 [yanıt işleniyor] olduğunda çalışır) 
        console.log("Process is processing... Ready State: " + xhr.readyState);
    }
});