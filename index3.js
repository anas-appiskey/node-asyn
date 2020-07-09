console.log("Before Prepare food");


function prepareFood(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
            
        },10);
    });

    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Frensh Toast");
            resolve("French Toast is Ready");
        },20);
    });
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise;
}

async function startprocess(){
    let foodValue = await prepareFood();
    console.log("food ",foodValue);
    let FrenchToastValue = await prepareFrenchToast();
    console.log("toast ", FrenchToastValue);
    let cofeeValue = await prepareCoffee();
    console.log("food ",cofeeValue);
    
}
startprocess();

console.log("After Prepare food dinner is ready");