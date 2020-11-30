
var btntranslate = document.querySelector("#btn-translator");
var txtinput = document.querySelector("#txt-input");
var otput = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function generateurl(text){
    return serverurl +"?"+"text="+text;
}
function errorHandler(error){
    alert("something wrong with server! try again after some time")
}

function btntrans(){
    var inputtext =  txtinput.value;

    fetch(generateurl(inputtext)).
    then(response => response.json()).
    then(json => otput.innerText=json.contents.translated)
    .catch(errorHandler)
};


btntranslate.addEventListener("click", btntrans)
    