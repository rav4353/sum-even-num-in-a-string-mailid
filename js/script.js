var strr = "Ravanthsri1520@gm<#$%545^7&>6?:ail.com";
var c = strr.replace(/[^0-9]/g, "");
const myArray = c.split("");
let x = 0
var sum = 0

for (var i = 0; i < myArray.length; i++) {

    if (myArray[i] % 2 == 0) {

        console.log(myArray[i]);
        x =  x + parseInt (myArray[i])
    }

}
console.log(x);