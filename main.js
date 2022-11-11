//Using Number
var arr=[10,20,-1,14,52,10]
var getNos=arr.some(getPostive=>getPostive>0)
console.log(getNos);
var arr=[10,20,85,421,65,784,41,58,85,47,52]
var greaterNO=arr.s(greatNo=>greatNo>50)
console.log(greaterNO);
var arr=[10,41,25,02,36,14,25,01,50,50]
var getNum=arr.some(getno=>getno>50)
console.log(getNum);
var arr=[01,02,01,03,04,05,04,08,07]
var singleDigit=arr.some(digit=>digit<10)
console.log(singleDigit)

//Using String
 
var names=['Ram','Ramani','Raja','Rakesh','Ravi','Rockie','RS']
var getR=names.some(name=>name.startsWith('R'))
console.log(getR);
var names=['Shankar','Sathya','Sabaree','Sam','Sathish','Sakthi']
var getS=names.some(name=>name.startsWith('S'))
console.log(getS);
var cars=['Maruthi','Toyata','Tata','Benz','Hummer','Jaquar','Cruiz']
var getcars=cars.some(car=>car.endsWith('A'))
console.log(getcars)
var games=['cricket','carrom','chess','football']
var getCgame=games.every(games.startsWith('V'))
console.log(getCgame);