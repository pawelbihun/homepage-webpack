const firstName = "Paweł";
const age = 30;

function greetOld (age, firstName){
    console.log(`Hi!, my name is ${firstName} and I am ${age} years old !`);
}
greetOld(20, 'Paul')

const greet = (age, firstName) => {
    console.log(`Hi!, my name is ${firstName} and I am ${age} years old !`);
}
greet(24, 'Adam')

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content; 
}
createContent('.article__description--js', 'Ten znacznik został uzupełniony java scriptem :) - sprawdź czy istnieje w źródle strony - ^U');

const deathStar = {
    diamnater: 120000,
    fire: (target) => {
        console.log(`${target} destroyed !`)
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44
    }
}

console.log(`The commander of ${deathStar.name} is ${deathStar.commander.name}.`);
deathStar.fire('rebel space ship');


// uzupełnieni sekcji javascriptem
const newSection = document.querySelector('.section--js');
newSection.innerHTML = `<h2 class="section__title">Uzupełnianie javascriptem</h2>
                    <article class="article">
                    <h3 class="article__title">Java Script - Test selektora</h3>
                    <p class="article__description">
                    JavaScript (w skrócie JS) – skryptowy język programowania, stworzony
                    przez firmę Netscape, najczęściej stosowany na stronach
                    internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie
                    lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu
                    standard języka skryptowego o nazwie ECMAScript, aktualnie
                    rozwijaniem tego standardu zajmuje się komisja TC39.
                    </p>
                    </article>`