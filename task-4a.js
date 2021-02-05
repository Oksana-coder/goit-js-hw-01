const quantityInputRef = document.querySelector('input[name="quantity"]');
const buttonRef = document.querySelector('.send-quantity');
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

buttonRef.addEventListener('click', () => {
    console.log('quantityInputRef.value: ', quantityInputRef.value);

    const quantityOfDroids = Number(quantityInputRef.value);

    totalPrice = quantityOfDroids * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        let remainedCredits = credits - totalPrice;
        console.log(`Вы купили ${quantityOfDroids} дроидов, на счету осталось ${remainedCredits} кредитов.`);
    }
})
