//Create a variable called myObject and assign 
//an object to it.

var myObject = {}




//Add two properties of firstName and lastName
//using dot notation

myObject.firstname = "sydney" 
myObject.lastname = "boyd"




//Add two properties of hobbies and age 
//using bracket notation
//hobbies must be an array of at least 4 strings
console.log age = 14
console.log hobby1 = "doing nails"
console.log hobby2 = "dancing"
console.log hobby3 = "eating food"


//Print the myObject variable

console.log (myObject)


//Use a for in loop to print all of the keys of the object

// print all keys
console.log(keys);
// [ 'java', 'javascript', 'nodejs', 'php' ]


///Use a for in loop to print all of the values of the object



const animals = {
    "tiger"
    "cat"
    "monkey"
    "elephant"
};

// iterate over object values
Object.values(animals).forEach(val => console.log(val));

// 🐅
// 🐱
// 🐒
// 🐘

/*
create an object that is about a specific car


Include: year, make, model, color and an array of features that you want your car to have

*/

function createCar(brand, name, color){
	  
	  var x = new Object();
	  x.brand = brand;
	  x.name = name;
	  x.color = color;
	  
	  x.printBrand = function() { 
        document.write("The car's brand name is " + this.brand + "</hr>");
	  };
	   return x;
	 }
	  var car1 = createCar("Toyota", "Camry" , "Blue");