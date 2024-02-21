
// Função Recursiva:

function coutDown(num){
    if(num <= 0){
        console.log("Pronto")
    }
    console.log(num)
    num --;
    coutDown(num)

}

function sumRange(num){
    if(num === 1){return 1 }
    return num + sumRange(num -1)
}

function addUpTo(n){
    return (n* (n +1 ) / 2);
}