var result = document.getElementById("result")
function addToResult(value) {
    if(result.value === '' && value == '0')
    {
        //do nothing
    }else{
        result.value += value;
    }
}

function addOperation(value) {
    var operation = '';
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
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
        operation = '';
    }
}
