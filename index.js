var operation = '';
var result = document.getElementById("result");

function addToResult(value) {
    if(result.value === '' && value == '0')
    {
        //do nothing
    }else{
        result.value += value;
    }
}

function addOperation(value) {
    if(result.value != '')
    {
        if (operation) {
            document.getElementById('result').value = document.getElementById('result').value.slice(0, -1) + value;
        } else {
            document.getElementById('result').value += value;
        }
        operation = value;
    }
}

function clearResult() {
    result.value = "";
}
  
function calculateResult() {
    if(document.getElementById('result').value != '')
    {
        try {
            var expression = document.getElementById('result').value;
            var fn = new Function('return ' + expression);
            var resultValue = fn.apply(null);
            document.getElementById('result').value = resultValue;
            operation = '';
        } catch (e) {
            // Handle syntax error
            console.error(e);
            alert('Invalid input');
        }
    }
}
