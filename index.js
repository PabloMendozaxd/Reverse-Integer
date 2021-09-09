function reverse(x){
    if(x<0)return -1 * reverse(-x);
    let solution=parseInt((x+'').split('').reverse().join(''));
    return (solution>2**31-1)?0:solution;
}
module.exports = reverse;