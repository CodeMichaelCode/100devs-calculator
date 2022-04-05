//Selectors
let screen = document.querySelector('#screen');
const total = document.querySelector('#valueEqual');
const button = document.querySelectorAll('.button');
const calcBody = document.querySelector('section');
const clearBtn = document.querySelector('#clear');

//Objects
function Ti86 () {
    this.addValue = function(e) {
        var clickElement = e.target.textContent;
        if(clickElement.length > 1)
            return;
        
        // let value = e.target.value();
        console.log(clickElement);
        screen.innerText = (screen.innerText += clickElement);
    }
    this.clear = function() {
        screen.innerText = ''
    }
}

let calc = new Ti86;

//Event Listeners
let buttonTarget = calcBody;
buttonTarget.addEventListener('click', calc.addValue);
clearBtn.addEventListener('click', calc.clear);