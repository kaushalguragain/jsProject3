function changetoC(){
 var degree;
 var convert;
 degree = document.getElementById("feren").value;
 convert = ((degree-32)*(5/9));
 document.getElementById("result1").innerHTML=convert;
}
function changetoF(){
    var degree1;
    var convert1;
    degree1 = document.getElementById("celc").value;
    convert1 = ((degree1*(9/5))+32);
    document.getElementById("result2").innerHTML=convert1;


}