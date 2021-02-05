const countryInputRef = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('.send-country');
let price;

buttonRef.addEventListener('click', () =>{
    console.log('countryInputRef.value: ', countryInputRef.value);

    let country = countryInputRef.value.toLowerCase();

    switch (country) {
            case 'китай':
                price = 100;
                break;
        
            case 'чили':
                price = 250;
                break;
        
            case 'австралия':
                price = 170;
                break;
        
            case 'индия':
                price = 80;
                break;
        
            case 'ямайка':
                price = 120;
                break;
        
            default:
                alert ('В вашей стране доставка не доступна.')
        }

        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

});

