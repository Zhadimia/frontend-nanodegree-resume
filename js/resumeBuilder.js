/* $("#main").append(["Claudio Moraes"]);

var awesomeThoughts = "I am Claudio and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

console.log(funThoughts);

$("#main").append([funThoughts])*/


/*var name = "Claudio Moraes";
var formattedName =  HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend (formattedRole);
$("#header").prepend (formattedName);*/

var bio = {
  "name": "Claudio Moraes",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(13) 99999-9999",
    "email": "claudiommomteiro@gmail.com",
    "twitter": "claudiomm93",
    "github": "Zhadimia",
    "location": "Santos"
  },
  "welcomeMessage": "Seja bem vindo ao meu curriculo",
  "skills": [
    "awesomeness", "programming", "teaching", "JS"
  ],
    "biopic": "images/fry.jpg"
};
$("#header").prepend(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").prepend(formattedSkills);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedWelcomeMessage);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedPic);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").prepend(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").prepend(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").prepend(formattedTwitter);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").prepend(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").prepend(formattedMobile);

var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend (formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend (formattedName);

// work

var work = {
}
  work.currentJobPosition = "Auxiliar Administrativo";
  work.employer = "Empresa X";
  work.yearsWorked = "3";
  work.city = "Santos";

// education

var education = {
}
  education["name"] = "Universidade Católica de Santos" ;
  education["years"] = "4";
  education["city"] = "Santos";
