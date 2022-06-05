const MoneyBox = (coins) => {
    var savecoins = 0;
    savecoins += coins;
    console.log(`MoneyBox: $${savecoins}`);
}

MoneyBox(5);
MoneyBox(10);


const MoneyBox = () => {
    var savecoins = 0;
    const countCoins = (coins) => {
        savecoins += coins;
        console.log(`MoneyBox: $${savecoins}`);
    }
    return countCoins;
};

let myMoneyBox = MoneyBox();

myMoneyBox(20);
myMoneyBox(4);
myMoneyBox(20);


