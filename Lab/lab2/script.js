const height = 0,
    mass = 0;

function calBMI(mass, height) {
    return (mass / (height * 2)).toFixed(1);
}

const markBMI = calBMI(78, 1.69);
const johnBMI = calBMI(92, 1.95);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${markBMI}) is higher than Mark's (${johnBMI})!`);
}
