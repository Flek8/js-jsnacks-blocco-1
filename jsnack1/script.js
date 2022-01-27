i = 0;
let numeri = 0;

while (i<10) {

    let numero = parseInt(prompt('Inserisci un  numero'))
        if (isNaN(numero)) {
            alert('Inserisci un numero')
        }
    i++;
    numeri += numero;
    
}

let target = document.getElementById('target');
target.innerHTML = 'La somma dei numeri inseriti è : ' + numeri;