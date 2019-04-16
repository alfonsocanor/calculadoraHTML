window.onload = function(){
    let container = document.getElementById('container');
    let display = document.getElementById('display');
    container.onclick = getValueNumber;
    container.onkeydown = getValueNumber;

    //variables condicionales
    let valueNumber;
    let num1;
    let num2;
    let clearDisplay = false;
    let activeOperator = null;
    let result = null;
    let keyCodeConditional;

    //event.target.id: Los id de los números de 0 al 9 han sido asignados del 1 al 9. Esto permite utilizar el id como número (parseInt)
        //al momento de hacer cálculos y validaciones
    //expr es usado para validar a través de redgex solo números en el evento clic para mostrar números en el display
        //y es usado con el método search. Este método devuelve 0 si coincide ó -1 si no coincide.
    
    function getValueNumber(event){
        //keyCode Registra el valor(único) de cada tecla presionada
        deleteValueClearDisplay(event.keyCode);
        let cond = operationValueByKeyboard(event.keyCode);
        console.log(event.keyCode);
        //operationValueByKeyboard(event.keyCode);
        if(event.target.id == 'display')
            valueNumber = String.fromCharCode(event.keyCode);
        else
            valueNumber = event.target.id;
        expr = /[0-9]/;
        console.log('This is expr result: ' + valueNumber.search(expr));
        if(valueNumber.search(expr) == 0)
            displayNumbers(valueNumber);
        else
            if(cond != null){
                valueNumber = cond;
            }
            operationHelper(valueNumber);
    }

    function displayNumbers(number){
        if(clearDisplay){
            display.value = number;
            clearDisplay = false;
        }
        else{
            display.value = display.value + number;
            }
    }

    function operationHelper(operator){
        switch(operator){ 
            case '+':
                if(num1 == null && num2 == null){
                    activeOperator = operator;
                    num1 = display.value;
                    clearDisplay = true;
                }
                else if(num1 != null && num2 == null){
                    activeOperator = operator;
                    num2 = display.value;
                    display.value = executeOperator[activeOperator](num1, num2);
                    //num1 = display.value;
                    clearDisplay = true;
                }
                else if(num1 != null && num2 != null){
                    activeOperator = operator;
                    num2 = display.value;
                    display.value = executeOperator[activeOperator](num1, num2);
                    //num1 = display.value;
                    clearDisplay = true;
                }
                break;
            case '=':
                //if(num1 != null && num2 == null){
                    num2 = display.value;
                    result = executeOperator[activeOperator](num1, num2);
                    display.value = result;
                    clearDisplay = true;
                //}
                break;
        }
    }

    //Objeto executeOperator
    let executeOperator = {
        '+': (num1, num2) => {
            return parseInt(num1) + parseInt(num2)},
        '-': (num1, num2) => {
            return parseInt(num1) - parseInt(num2)},
        '*': (num1, num2) => {
            return parseInt(num1) * parseInt(num2)},
        '/': (num1, num2) => {
            return parseInt(num1) / parseInt(num2)},
        '=': () => result
    }

    function deleteValueClearDisplay(codigoDeTecla){
        if(codigoDeTecla == 8){
            console.log(display.value.length);
            display.value = display.value.slice(0, -1);
        }
    }

    function operationValueByKeyboard(value){
        if(keyCodeConditional == null && value == 16){
            keyCodeConditional = 16;
        }
        else if((value == 187 && keyCodeConditional == 16)){
            keyCodeConditional = null;
            return '+';
        }
        else if(value == 187 || value == 13){
            return '=';
        }
        /*if (cond == true){
            throw "Your argument must be less than 5.";
        }*/
    }
}