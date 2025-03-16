
    let display = document.getElementById("display");

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
        display.value = eval(display.value);
        } catch (error) {
        alert("Ошибка! Проверьте ввод.");
    display.value = "";
        }
    }
    
