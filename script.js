function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getDutput(){
    return document.getElementById("output-value").innerText;
}
function printDutput(num)
{
    if(nur==""){
        document.getElementById("output-value").innerText;
    }
    else{
        document.getElementById("output-value").innerText-getFormattedNumber(num);
    }
}
function getFormattedNumber(num)
{
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));``
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function()
{
    if(this.id=="clear"){
        printHistory("");
        printOutput("");
    }
    else if(this.id=="backspace"){
        var output=reverseNumberFormat(getOutput()).toString();
        if(output(){
    }
}
}