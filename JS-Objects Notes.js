//Objects
//-have no order like arrays
//-great for modeling data
//-syntax for new object is var bestTeacherEver = {};
//-bestTeacherEver.name = "Jake Lingwall"
//-this a javascript object
var bestTeacherEver = 
{
	name: "Jake Lingwall",
	awesomeness: 94,
	everEver: true,
}
//Key: how we lookup data in an object "name", "awesomeness", etc.
//Value: are the actual data Jake Lingwall, 92, etc.

var byu = {name: 'brigham yound uni', students: 33000, football: "not great"};
//calls byu.name, byu.students, byu.football

//two different ways to access values with a key name
//-dot notation
jake.name
//-bracket notation: used when there is a need to by dynamic
jake['name']

//deleting properties
delete object.property
delete jake.name
delete jake['name']

//for in loop //key is just a variable
//-syntax for(key in object){do something.}
for (key in devclsss) {
	alert(key, devclass[key]);
}

//another example //can use console.log() instead of alert
var myObject = {name: "Not Page", age: 22}
for (key in myObject){
	alert(key);
}

//-syntax again
for (whatIWantToLookAt in myObject){
	console.log("this is the key I'm currently looking at:", whatIWantToLookAt)
}

//Methods = a function is javascript
var rocky = {name: "balboa"}
//give it Method //this is a reserved keyword of javascript meaning the object i'm currently inside
rocky.sayName = function(){
	console.log(this.name);
}
rocky.sayName();

//Getters and Setter pattern
//while loops keep running until something comes back false