//Lab 3.6.1

function calAva(a, b, c) {
    return (a + b + c) / 3;
}

const Dolphins = calAva(97, 112, 101);
const Koalas = calAva(109, 95, 106);

if (Dolphins >= 100 && Koalas >= 100) {
    if (Dolphins > Koalas) {
        console.log("Dolphins win");
    } else if (Dolphins < Koalas) {
        console.log("Koalas win");
    } else {
        console.log("Both win the trophy!");
    }
} else {
    console.log("no one win the trophy!");
}


//Lab 3.6.2.
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`)