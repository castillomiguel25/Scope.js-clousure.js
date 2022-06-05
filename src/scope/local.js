const helloworld = () => {
    const hello = 'hello word';
    console.log(hello)
}

helloworld();


// Habito léxico
var scope = 'hola soy una variable global';

const functionscope = () => {
    var scope = 'hola soy una variable local'
    const func = ()  => {
     return scope
    }
    console.log(func());
};


functionscope();