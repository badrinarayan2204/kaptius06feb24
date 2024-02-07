    let display = document.getElementById('d');

    function v(val) {
        display.value += val;
    }

    function c() {
        display.value = '';
    }

    function e() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
        //slice return the selected elements in an array, as a new array object
    }
    function sqrt() {
      try {
        let result = Math.sqrt(parseFloat(display.value));
        display.value = result.toFixed(3);
      } catch (error) {
          display.value = 'Error';
      }
  }function handleKeyboardInput(event) {
    let key = event.key;

    if (!isNaN(key) || key === '.') {
        v(key.toString());
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        v(key);
    } else if (event.code === 'Enter' || key === '=') {
        e();
    } else if (key === 'Backspace') {
        backspace();
    }
}

document.addEventListener('keydown', handleKeyboardInput);