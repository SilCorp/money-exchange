module.exports = function makeExchange(currency) {
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let Result = {};
    let money = currency;
    let alphabet = {'H': 50,
                    'Q': 25,
                    'D': 10,
                    'N': 5,
                    'P': 1};
    let key = Object.keys(alphabet);
    for (let i = 0; i < key.length; i++) {
        let div = parseInt(money / alphabet[key[i]]);
        if (div > 0) {
            Result[key[i]]= div;
        }
        money -= div * alphabet[key[i]];
    }

    return Result;
};
