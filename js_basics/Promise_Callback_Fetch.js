/*
//? this function doing this; "please wait 2 second for executing"
function FuncWaiter(cb){ //? this function has a parameter of callback function 
    setTimeout(
        //! data isn't visible because there are any errors.
        () => cb("This is an any data.", "There are any errors."),
        2000
     )
}

function CallBack(result ,err){
    //? this statement quest this; "is there an error?"
    if(err) //! there is an error.
        console.log("Reject")
    else //* there isn't an error.
        console.log("Fullfield")
}

FuncWaiter(CallBack) //? console result: Reject
*/


function PromiseGenerator(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(2), 2000);
    })
}

async function asyncFunc(){
    console.log(1)
    await PromiseGenerator().then(value => console.log(value))
    console.log(3)
}

asyncFunc()













