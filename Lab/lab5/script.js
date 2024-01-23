//Lab 5.8.1
const Mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI() {
        return (this.mass / (this.height * 2)).toFixed(1);
    },
};

const John = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI() {
        return (this.mass / (this.height * 2)).toFixed(1);
    },
};

if (Mark.calcBMI() > John.calcBMI()) {
    console.log(
        `${Mark.name} BMI ${Mark.calcBMI()} is higher than ${
            John.name
        } BMI ${johnBMI.calcBMI()}!`
    );
} else {
    console.log(
        `${John.name} BMI ${John.calcBMI()} is higher than ${
            Mark.name
        } BMI ${Mark.calcBMI()}!`
    );
}

// Lab 5.8.2

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [],
    totals = [];

const calcTip = (bill) =>
    bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(
        `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
    );
}

//bonus

function calcAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum / array.length;
    console.log("calcAverage : ", sum / array.length);
}

calcAverage(totals);
