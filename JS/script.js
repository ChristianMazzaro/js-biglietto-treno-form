
//input kilometri

/*
const KM = parseInt(prompt('Inserire il numero di chilometri da percorrere:'));
console.log(KM, typeof KM, 'KM');

//input età

const age = parseInt(prompt("inserire l'età del passseggero"));
console.log(age, typeof age, 'age');
*/

const _Button = document.getElementById('_button');

_Button.addEventListener('click', 
    function() {

        alert('WAMUUUUUUUUU');

        const kmInput = parseInt(document.querySelector('[name="km"]').value);
        console.log(kmInput, typeof kmInput);
        

        const ageInput = parseInt(document.querySelector('[name="age"]').value);
        console.log(ageInput, typeof ageInput);
        
        let price = 0.21 * kmInput;

        
        //calcolo minorenne
        
        if (ageInput< 18) {
        
            price *= 0.8;
            console.log(price);
        
        }
        
        //calcolo over 65
        
        else if (ageInput> 65) {
        
            price *= 0.6;
            console.log(price);
        
        }
        
        //calcolo base
        
        else {
        
            console.log(price);
        
        };
        
        document.querySelector('h1').innerHTML = 'il prezzo del biglietto è: € ' + price.toFixed(2);
        
        
        

    }
);



