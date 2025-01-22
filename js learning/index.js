/*console.log(`hello`);
console.log('hi')
//window.alert(`no way bro!`)
//window.alert(`na na na!`)
let x = 24;
x-=1
let names = "DoN"
console.log(`my name is ${names}`);
console.log(`my age is ${x}.`)
let fav="milk"
console.log(fav)
 document.getElementById("p1").textContent=x
 
const PI=3.14
let rad;
let circum;

document.getElementById("myB").onclick=function()
{
   rad= document.getElementById("myText").value;
   rad=Number(rad);
   circum=2*PI*rad;
   document.getElementById("myH3").textContent=circum;
}


//const dec=document.getElementById("dec");
//const inc=document.getElementById("inc");
//const Rst=document.getElementById("Rst");
//const zero=document.getElementById("zero");
let count=0;
inc.onclick=function()
{
   count++;
   zero.textContent=count;
}

dec.onclick=function()
{
   count--;
   zero.textContent=count;
}

const gen=document.getElementById("gen");
const randomNum=document.getElementById("randomNum"); 
const min=1;
const max=6;
let rand;
gen.onclick=function()
{
 rand=Math.floor(Math.random()*max)+min ;
 randomNum.textContent=rand;
}

let myCheckBox=document.getElementById("myCheckBox");
let myRadio1=document.getElementById("myRadio1");
let myRadio2=document.getElementById("myRadio2");
let myRadio3=document.getElementById("myRadio3");
let subResult=document.getElementById("subResult");
let paymentResult=document.getElementById("paymentResult");
let submitBtn=document.getElementById("submitBtn");

submitBtn.onclick=function()
{
if(myCheckBox.checked)
{
 subResult.textContent="one is selected";
}
else if(myRadio1.checked)
{
   subResult.textContent="two  is selected"
}
else if(myRadio2.checked)
   {
      subResult.textContent="three  is selected"
   }
else if(myRadio3.checked)
      {
         subResult.textContent="four  is selected"
      }   

}

let min=1;
let max=100;
let answer;
answer=Math.floor(Math.random()*(max-min+1))+min;
let guess;
let attempts=0;
let running=true

while(running)
{
guess=window.prompt(`Enter a number between 1-100`);
guess=Number(guess);
if(isNaN(guess))
{
   window.alert(`Enter Valid Number`)
}
else if(guess<min||guess>max)
{
   window.alert(`Enter Valid Number`)
}
else{
   attempts++;
   if(guess<answer)
      window.alert(`Your answer is very low`)
   else if(guess>answer)
      window.alert(`Your answer is very high`)
   else
   {
      window.alert(`Correct!!! Answer is ${answer},you took ${attempts} attempts`)
      running=false;
   }       
   }
}
   */
function calculateCost() {
   // Get values from the form
   const movieChoice = document.getElementById('movie').value;
   const tickets = parseInt(document.getElementById('tickets').value);
   const ticketType = document.getElementById('ticket-type').value;
   const showTime = document.getElementById('show-time').value;

   const movieNames = { '1': 'Marco', '2': 'Riffle Club', '3': 'Pani' };
   const ticketPrices = { '1': 200, '2': 100 }; // Premium = 200, Normal = 100
   const discountPercentage = 10;

   let movie = movieNames[movieChoice];
   let ticketPrice = ticketPrices[ticketType];
   let ticketTypeName = ticketType === '1' ? 'Premium' : 'Normal';
   
   let cost = ticketPrice * tickets;
   let discount = 0;

   // Apply discount if tickets > 5
   if (tickets > 5) {
       discount = cost * discountPercentage / 100;
   }

   let totalCost = cost - discount;

   // Show the results
   const showTimeText = {
       '1': '10.00 AM',
       '2': '2.00 PM',
       '3': '6.00 PM',
       '4': '10.00 PM'
   };

   const currentDate = new Date();
   const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });

   const resultText = `
       <h3>Booking Summary:</h3>
       <p><strong>Movie:</strong> ${movie}</p>
       <p><strong>Tickets:</strong> ${tickets}</p>
       <p><strong>Ticket Type:</strong> ${ticketTypeName}</p>
       <p><strong>Show Time:</strong> ${showTimeText[showTime]}</p>
       <p><strong>Discount:</strong> ${discount.toFixed(2)} RS</p>
       <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)} RS</p>
       <p><strong>Day:</strong> ${currentDay}</p>
   `;
   
   document.getElementById('result').innerHTML = resultText;
}
