const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt('Сколько дроидов Вы хотите купить?');
let quantityOfDroids = userInput;
let totalPrice;

if (userInput === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = userInput * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    }
    else {
        let remainedCredits = credits - userInput * pricePerDroid;
        console.log(`Вы купили ${quantityOfDroids} дроидов, на счету осталось ${remainedCredits} кредитов.`);
    }
}
