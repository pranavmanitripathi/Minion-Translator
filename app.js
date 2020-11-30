// var user= prompt("give the user name ");

// alert("name is "+user);

var btntranslate = document.querySelector("#btn-translator");
var txtinput = document.querySelector("#txt-input");
var otput = document.querySelector("#output");


btntranslate.addEventListener("click",function btntrans(){
    otput.innerText = txtinput.value;

   
})