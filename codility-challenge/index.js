// q3
function solution3(){
    let num1 = 999;
    while (num1 >=100){
        console.log(num1)
        num1 = num1 - 1
    }
}
//console.log(solution3())
//q4
function isPalindrome(x) {
    // Convert integer to string
    let xStr = String(x);
    
    // Check if the string is equal to its reverse
    return xStr === xStr.split('').reverse().join('');
}



