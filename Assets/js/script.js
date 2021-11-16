//Task 1.1
function FindArrayNumbers(arr, p) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==p){
            return true;
        }
    }
     return false;
}
console.log(FindArrayNumbers([100,2,5,7,9,1,6,3],9));

//Task 1.2
function FindOddNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(FindOddNumbers([1,4,2,6,9,8,11,10]));



//Task 2
function Calculator(a,b,operator){
    
    switch (operator) {
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
           return a*b;
            break;
        case '/':
           return a/b;
            break;
        default:
            console.log("wrong operator,try again!");
            break;
    }
   
}
console.log(Calculator(15,5,'/'));