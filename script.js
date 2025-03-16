function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    answer = (a / b)
    if (answer % 1 !== 0) {
        return answer.toPrecision(11)
    }
    return answer
}

function operate(operand1, operand2, operator) {
    if (operator == "+") {
        return add(Number(operand1), Number(operand2))
    }
    else if (operator == "-") {
        return subtract(Number(operand1), Number(operand2))
    }
    else if (operator == "*") {
        return multiply(Number(operand1), Number(operand2))
    }
    else if (operator == "/") {
        if (operand2 == "0") {return "Can't divide by zero"}
        return divide(Number(operand1), Number(operand2))
    }
}

function toggleFlag() {
    if (opFlag == 1) {
        opFlag = 2
    }
    else if (opFlag == 2) {
        opFlag = 1
    }
}

//MAIN
let Op1 = "";
let Op2 = "";
let opr = "";
let opFlag = 1;

//attach event listeners
const buttonContainer = document.getElementById("buttons")
const screen = document.getElementById("screen")

buttonContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("num")) {
        if (opFlag == 1) {
            Op1 += event.target.innerHTML
            screen.innerHTML = Op1
        }
        else if (opFlag == 2) {
            Op2 += event.target.innerHTML
            screen.innerHTML = Op2
        }
    }

    if (event.target.classList.contains("func")) {
        if (Op2 !== "") {
            Op1 = operate(Op1, Op2, opr)
            screen.innerHTML = Op1
            Op2 = ""
        }
        opr = event.target.innerHTML
        opFlag = 2
    }

    if (event.target.classList.contains("equals")) {
        Op1 = operate(Op1, Op2, opr)
        screen.innerHTML = Op1
        
        Op1 = ""
        Op2 = ""
        opr = ""
        opFlag = 1
    }

    if (event.target.classList.contains("all-clear")) {
        Op1 = ""
        Op2 = ""
        opr = ""
        opFlag = 1
        screen.innerHTML = Op1
    }
})

