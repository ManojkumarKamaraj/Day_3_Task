//Task - 1 How to Compare Two JSON have the same Propertiues Without Order? 
let obj1 = {
    name : "Person 1",
    age : 5,
    
}
let obj2={
    age : 5,
    name : "Person 1"
}

let val1 = Object.values(obj1), val2 = Object.values(obj2);
let ob1 = Object.keys(obj1),  ob2 = Object.keys(obj2);
let len=0, len1=0;

for(var key in val1)
{
    for(var key2 in val2)
    {
        if(val2[key2]===val1[key]){
            console.log(val2[key2]);
            len1++
        }
    }   
}
for(var key in ob1)
{
    for(var key2 in ob2)
    {
        if(ob2[key2]===ob1[key]){
            console.log(ob2[key2]);
            len++
        }  
    }
}
if (len === len1 ||(JSON.stringify(obj1)===JSON.stringify(obj2))){
    console.log("The JSON Objects are Equal");
}
else{
    console.log("The JSON Objects are Not Equal");
}

console.log("From Here Will be Task 2 and Task 3 Outputs..."); // Task - 2  and Task - 3

                            // Task - 2  Display all the Country flags in the Console

let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)

request.send()

request.onload = function () {
    let data = request.response;
    let val = JSON.parse(data);
    for(let i=0; i<val.length; i++) {
        console.log(val[i].flags.png);

                            // Task - 3  Display all the Country names,Region,Sub-Region and Populations in the Console 

        console.log("Country-Name:"+" "+val[i].name.common+" ,"+"region:"+" "+val[i].region+" ,"+"Sub-region:"+" "+val[i].subregion)
    }
    
}


