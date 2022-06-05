var a = 'hello';

function hello() {
    let b = 'helloooo';
    const c = 'holaa';
    if (true) {
    let d = 'hello wold';
    debugger
    }
};

hello();

const MoneyBox = () => {
    debugger
    var savecoins = 0;
    const countCoins = (coins) => {
        debugger
        savecoins += coins;
        console.log(`MoneyBox: $${savecoins}`);
    }
    return countCoins;
};

let myMoneyBox = MoneyBox();

myMoneyBox(20);

myMoneyBox(4);
myMoneyBox(20);

