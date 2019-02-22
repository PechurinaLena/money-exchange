// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const P = 1;
    const N = 5;
    const D = 10;
    const Q = 25;
    const H = 50;

   if (currency <= 0) {
        return {};
    } else if (currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } 
      

}

