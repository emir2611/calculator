let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = computeExpression(display.value);
        display.value = result;
    } catch (error) {
        alert("Ошибка! Проверьте ввод.");
        display.value = "";
    }
}

function computeExpression(expr) {
    if (!/^[\d+\-*/().\s]+$/.test(expr)) {
        throw new Error("Недопустимые символы");
    }

    const fn = new Function("return " + expr);
    return fn();
}