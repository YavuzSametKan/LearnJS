document.getElementById("change").addEventListener("click", exchange);
document.getElementById("reverse").addEventListener("click",reverse);
//? press enter and click the exchange button
document.addEventListener('keydown', e => (e.keyCode === 13) ? document.getElementById("change").click() : null);
//? press backspace and delete the result value
document.addEventListener('keydown', e => (e.keyCode === 8) ? document.getElementById("symbolInp").value = "" : null);

function exchange(){
    let xhr = new XMLHttpRequest();

    apiAttr = {
        basedUrl : "http://api.exchangeratesapi.io/v1/latest",
        key : "d419ff3ec4c3307753ea155158c91fd3",
        base : document.getElementById("base").value,
        symbols : document.getElementById("symbol").value //? TRY,USD,EUR
    }

    

    let api = apiAttr.basedUrl+"?access_key="+apiAttr.key+"&base="+apiAttr.base+"&symbols="+apiAttr.symbols;
    console.log(api)
    xhr.open("GET",api,true);

    if(document.getElementById("amount").value == ""){
        myAlert("Please Enter a Value.","primary",2500)
        document.getElementById("symbolInp").value = ""
    }
    else{
        xhr.onload = ()=>{
            if(xhr.status == 200){ //* ready state is 4 and http status is 200 (ok)
                let baseAmount = Number(document.getElementById("amount").value.trim());
                let symbolInput = document.getElementById("symbolInp");
                let baseToSymbol = Number(JSON.parse(xhr.responseText).rates[apiAttr.symbols]);
                symbolInput.value = baseAmount * baseToSymbol;
            }
            else if(xhr.status == 400){
                myAlert(`
                <b>400 Bad Response Error:</b><br>
                CHANGE THE BASE RATE VALUE IS EUR OR UPGRADE THE YOUR API_KEY<br>
                Your API key does not allow you to convert ${apiAttr.base} to ${apiAttr.symbols}.
                `,"danger",10000);
                document.getElementById("symbolInp").value = ""
                document.getElementById("amount").value = ""
            }
        }
    }

    xhr.send();
}

function myAlert(message,type,time){
    let alert = document.getElementById("alert");
            alert.classList = "alert alert-"+type;
            alert.innerHTML = message;
            setTimeout(()=>alert.classList = "alert alert-"+type+" d-none",time)
}

function reverse(){
    let base = document.getElementById("base");
    let symbol = document.getElementById("symbol");
    [base.value,symbol.value] = [symbol.value,base.value]
}