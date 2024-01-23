//Lab 4.7.1

const calAva = (a, b, c) => (a + b + c) / 3;

const Dolphins = calAva(85, 54, 41);
const Koalas = calAva(23, 34, 27);

function checkWinner(a, b) {
    if (a > b * 2) {
        console.log(`Dolphins win ${a} vs ${b}`);
    } else if (b > 2 * a) {
        console.log(`Koalas win ${b} vs ${a}`);
    } else {
        console.log("no team win!");
    }
}

checkWinner(Dolphins, Koalas);

//Lab 4.7.2
const calcTip = (bill) =>
    bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
    calcTip(bills[0]) + bills[0],
    calcTip(bills[1]) + bills[1],
    calcTip(bills[2]) + bills[2],
];

console.log(
    `The bill was ${bills}, the tip was ${tips}, and the total value ${totals}`
);
