function ent(num){
    var result = document.getElementById("result");
    result.value += num
}


function clearEnt(){
    var result = document.getElementById("result");
    result.value = "";
}


function calcu(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}


function del(){
    var result = document.getElementById("result");
    result.value = result.value.substring(0,result.value.length - 1);
}