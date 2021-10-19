
function luckyNumbers(n){
    let arr =[];
    for (let i = 0; i < n; i++){
    arr.push(Math.floor(Math.random() * 10 + 1));
    
} return arr;
}
console.log(luckyNumbers(10));

