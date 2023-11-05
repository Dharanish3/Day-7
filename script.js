
var country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all",true)
country.send();
country.onload = function(){
    var data = country.response;
    var result1 = JSON.parse(data)

    // a.Get all the countries from Asia continent /region using Filter function
    var res3 = result1.filter((c)=> c.region === "Asia")
    var ans3 = res3.map((nam) => console.log(nam.name.common)) 
    

    // b.Get all the countries with a population of less than 2 lakhs using Filter function
    var  res2 = result1.filter((b)=> b.population < 2000000)
    var ans = res2.map((names) => console.log(names.name.common))

    
    // c. Print the following details name, capital, flag, using forEach function
    var res1 = result1.forEach((a) => console.log(`Name : ${a.name.common} , Capital : ${a.capital}, Flag : ${a.flag}`))


    // d. 
    var res4 = result1.reduce((great , val) => great+val.population , 0)
    console.log(res4)
   


}