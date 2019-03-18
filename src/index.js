// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let money = {
        P: 1,
        N: 5,
        D: 10,
        Q: 25,
        H: 50,
    };

    if (currency <= 0) {
        return {};
    } else if (currency >= 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    /*

    Например: 
     - если currency 102 мы должны поделить сначала на H.
    Если делится без остатка - возвращаем количество H в этом currency.
     - если с остатком, делим на Q. Если выводит минус число  - пробуем дальше с D или с N или с P.
     Возвращаем количество букв, которые поделились без остатка и без минуса.

     только целые числа
     работа с объеками ?
     новая переменная для новой currency??
    */

}