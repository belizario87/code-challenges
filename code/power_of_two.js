/*
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
const n = 4
function powersOfTwo(number) {
    const result = [1]
    for(let i = 1 ; i <= n; i++ ){
    result.push(Math.pow(2, i))
    }
        return result;
}

console.log(powersOfTwo(n));
    




