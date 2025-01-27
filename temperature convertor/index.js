
const textBox=document.getElementById("textBox")
const r1=document.getElementById("r1")
const r2=document.getElementById("r2")
const result=document.getElementById("result")
let temp;

function convert()
{
 if(r1.checked)
 {
    temp=Number(textBox.value);
    temp=(temp-32) * (5/9) ;
    result.textContent=temp.toFixed(2)+ " c"
 }
 else if(r2.checked)
 {
    temp=Number(textBox.value);
    temp=temp*9/5 + 32;
    result.textContent=temp.toFixed(1)+ " F" }
 else
 {
    result.textContent="please select any unit!"
    window.alert("select any one")
 }
}