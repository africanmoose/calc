
// variables
    const CALC_DISPLAY = document.getElementById('calcDisplay');
    const ALL_CLEAR = document.getElementById('calcButtonAllClear');
    const CLEAR = document.getElementById('calcButtonClear');
    const CALC_PERCENT = document.getElementById('calcButtonPercent');
    const CALC_DIVIDE = document.getElementById('calcButtonDivide');
    const CALC_ADD = document.getElementById('calcButtonAdd');
    const CALC_SUBTRACT = document.getElementById('calcButtonSubtract');
    const CALC_MULTIPLY = document.getElementById('calcButtonMultiply');
    const CALC_DECIMAL = document.getElementById('calcButtonDecimal');
    const CALC_EQUALS = document.getElementById('calcButtonEquals');
    const CALC_0 = document.getElementById('calcButton0');
    const CALC_1 = document.getElementById('calcButton1');
    const CALC_2 = document.getElementById('calcButton2');
    const CALC_3 = document.getElementById('calcButton3');
    const CALC_4 = document.getElementById('calcButton4');
    const CALC_5 = document.getElementById('calcButton5');
    const CALC_6 = document.getElementById('calcButton6');
    const CALC_7 = document.getElementById('calcButton7');
    const CALC_8 = document.getElementById('calcButton8');
    const CALC_9 = document.getElementById('calcButton9');
    let setOperation = "add";
    let displayValue = "0";
    let lastValue = 0;
    let currentValue = 0;
    let tempValue = 0;
    let runningTotal = 0;
    let intCounter = 0;

// RESET
    ALL_CLEAR.addEventListener("click",() => {
        displayValue = "0";
        lastValue = 0;
        currentValue = 0;
        runningTotal = 0;
        tempValue = 0;
        intCounter = 0;
        updateCalcDisplay("0");
        })

    CLEAR.addEventListener("click",() => {
        displayValue = "0";
        updateCalcDisplay("0");   
    })

// NUMBER BUTTON PRESS
    CALC_0.addEventListener("click",() => {
        if (displayValue != "0") {
            numberPress("0");
            }
        });

    CALC_DECIMAL.addEventListener("click",() => {

        displayValue += ".";
        updateCalcDisplay(displayValue)
        
        });    

    CALC_1.addEventListener("click",() => {
        numberPress("1");
        });

    CALC_2.addEventListener("click",() => {
        numberPress("2");
        });

    CALC_3.addEventListener("click",() => {
        numberPress("3");
        });
        
    CALC_4.addEventListener("click",() => {
        numberPress("4");
        });

    CALC_5.addEventListener("click",() => {
        numberPress("5");
        });

    CALC_6.addEventListener("click",() => {
        numberPress("6");
        });

    CALC_7.addEventListener("click",() => {
        numberPress("7");
        });

    CALC_8.addEventListener("click",() => {
        numberPress("8");
        });

    CALC_9.addEventListener("click",() => {
        numberPress("9");
        });

// OPERATION BUTTON PRESS
    CALC_ADD.addEventListener("click",() => {

        displayValue += "+";    
        setOperation = "add";

        lastValue = Number(runningTotal);
        currentValue = Number(tempValue);  
        runningTotal = calculate(lastValue,currentValue,setOperation);
        updateCalcDisplay(displayValue);

        tempValue = 0;
        intCounter += 1;
        
        });

    CALC_SUBTRACT.addEventListener("click",() => {

        displayValue += "-";    
        setOperation = "subtract";

        if (intCounter == 0) {
            //first run, do NOT do 0-n
            currentValue = Number(tempValue);  
            runningTotal = currentValue;
        }
        else {
                
            lastValue = Number(runningTotal);
            currentValue = Number(tempValue);  
            runningTotal = calculate(lastValue,currentValue,setOperation);
        }
        updateCalcDisplay(displayValue);
        tempValue = 0;
        intCounter += 1;
        });
        
    CALC_MULTIPLY.addEventListener("click",() => {

        displayValue += "*";    
        setOperation = "multiply";

        if (intCounter == 0) {
            //first run, do NOT do 0*n
            currentValue = Number(tempValue);  
            runningTotal = currentValue;
        }
        else {
                
            lastValue = Number(runningTotal);
            currentValue = Number(tempValue);  
            runningTotal = calculate(lastValue,currentValue,setOperation);
        }
        updateCalcDisplay(displayValue);
        tempValue = 0;
        intCounter += 1;
        });

    CALC_DIVIDE.addEventListener("click",() => {

        displayValue += "/";    
        setOperation = "divide";

        if (intCounter == 0) {
            //first run, do NOT do 0*n
            currentValue = Number(tempValue);  
            runningTotal = currentValue;
        }
        else {
                
            lastValue = Number(runningTotal);
            currentValue = Number(tempValue);  
            runningTotal = calculate(lastValue,currentValue,setOperation);
        }
        updateCalcDisplay(displayValue);
        tempValue = 0;
        intCounter += 1;
        });

    CALC_EQUALS.addEventListener("click",() => {
       //run final operation

        lastValue = Number(runningTotal);
        currentValue = Number(tempValue);  
        runningTotal = calculate(lastValue,currentValue,setOperation);
        updateCalcDisplay(runningTotal);

        //reset numbers
        tempValue = runningTotal;
        currentValue = runningTotal;
        intCounter = 0;
        //lastValue = 0;

        });

//functions
    function calculate(a,b,calcType) {

        if (calcType == "add") {
            return a+b;
            }
        else if (calcType == "subtract") {
            return a-b;
            }
        else if (calcType == "multiply") {
            return a*b;
            }
        else if (calcType == "divide") {
            return a/b;
            }
        }

    function numberPress(a){

        if (displayValue != "0") {
            displayValue += a;
            }
        else {
            displayValue = a;
            }

        updateCalcDisplay(displayValue);

        //set up numbers for future calculation
        tempValue = tempValue += a;
    }

    function updateCalcDisplay(a) {
        
        CALC_DISPLAY.innerHTML = a
        displayValue = a;
        }

    