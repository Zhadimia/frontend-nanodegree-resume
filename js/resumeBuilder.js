$("#main").append(["Claudio Moraes"]);

var awesomeThoughts = "I am Claudio and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

console.log(funThoughts);

$("#main").append([funThoughts])


var name = "Claudio Moraes";
var formattedName =  HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend (formattedRole);
$("#header").prepend (formattedName);
