var chemistryNum = +prompt("Enter Your Chemistry Paper Number");
document.getElementById('marks1').innerHTML=chemistryNum;

var PhysicsNum = +prompt('Enter Your Physics Paper Number');
document.getElementById('marks2').innerHTML=PhysicsNum;

var mathNum = +prompt('Enter Your Math Paper Number');
document.getElementById('marks3').innerHTML=mathNum;

var urduNum = +prompt('Enter Your Urdu Paper Number');
document.getElementById('marks4').innerHTML=urduNum;

var engNum = +prompt('Enter Your English Paper Number');
document.getElementById('marks5').innerHTML=engNum;

var totalNum = chemistryNum+PhysicsNum+mathNum+urduNum+engNum;
document.getElementById('totalmarks').innerHTML=totalNum;

 var percentage =  totalNum*100/500;
 document.getElementById('percentage').innerHTML=percentage+'%';
  


 if(percentage >= 90 && percentage < 100){
    document.getElementById('grad').innerText="A1+";
 }
 else if(percentage >= 80 && percentage <=90){
    document.getElementById('grad').innerText= "A+";
 }
 else if(percentage >= 70 && percentage <=80){
    document.getElementById('grad').innerText= "A";
 }
 else if(percentage >= 60 && percentage <=70){
    document.getElementById('grad').innerText= "B";
 }
 else if(percentage >= 50 && percentage <=60){
    document.getElementById('grad').innerText= "C";
 }
 else if(percentage >= 40 && percentage <=50){
    document.getElementById('grad').innerText= "D";
 }
 else if(percentage >= 30 && percentage <=40){
    document.getElementById('grad').innerText= "Fail"
 }






