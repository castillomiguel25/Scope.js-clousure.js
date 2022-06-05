const fruits = () => {
    if (true) {
        var fruit = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi'
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit)
    
}

fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherfiction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherfiction();