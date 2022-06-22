let a = ''; //first number
let b = ''; //second number
let sign = ''; //znak operacii
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//ekran
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    // nazhata ne knopka
    if (!event.target.classList.contains('btn')) return;
    // nazhata knopka AC
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // polychau nazhatyu knopky
    const key = event.target.textContent;

    // esli nazhata knopka 0-9 ili .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }   
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
    }

    // esli nazhata knopka + - / X
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
    }

    //nazhata knopka =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if ( b === '0') {
                    out.textContent = 'false'
                    a = '';
                    b = '';
                    sign = '';
                    return;                
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}