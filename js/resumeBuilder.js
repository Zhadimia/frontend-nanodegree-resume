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

//main
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//header

var bio = {
  "name": "Claudio Moraes",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(13) 99999-9999",
    "email": "claudiommomteiro@gmail.com",
    "twitter": "claudiomm93",
    "github": "Zhadimia",
    "location": "Santos, SP"
  },
  "welcomeMessage": "Seja bem vindo ao meu curriculo",
  "skills": [
    "awesomeness", "programming", "teaching", "JS", "enorme vontade de aprender"
  ],
    "biopic": "images/fry.jpg"
};
var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend (formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend (formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

/*$("#header").append(HTMLskillsStart);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills1);

var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills2);

var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills3);

var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills4);*/

/*if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
}*/

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkills);
}

// work

var work = {
  "jobs": [
    {
    "title": "Auxiliar Administrativo",
    "employer": "Empresa A",
    "year": "2012-2016",
    "city": "Santos,SP",
    "description": "Responsavel pela elaboração do fluxo de caixa projetado e realizado, emissão de notas fiscais e entre outros"
  },
  {
    "title": "Analista Financeiro",
    "employer": "Empresa B",
    "year": "2016-Future",
    "city": "Santos,SP",
    "description": "Responsavel pela emissão de notas fiscais, elaboração de orçamentos e controles financeiros"
    }
  ]
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].year);
    $(".work-entry:last").append(formattedDate);

    var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
    $(".work-entry:last").append(formattedCity);

    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDesc);
  }
}

displayWork();

  /*var formattedDate = HTMLworkDates.replace("%data%", work.year);
  $(".work-entry").append(formattedDate);

  var formattedCity = HTMLworkLocation.replace("%data%", work.city);
  $(".work-entry").append(formattedCity);

  var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.description);
  $(".work-entry").append(formattedWorkDesc);*/



//$("#main").append(work["position"]);

// education

var education = {
  "schools": [
    {
      "name": "Liceu São Paulo",
      "city": "Santos,SP",
      "degree": "Ensino Médio",
      "date": "2008-2010",
      "url": "http://www.liceusaopaulo.com.br/"
    },
    {
      "name": "Universidade Católica de Santos",
      "city": "Santos,SP",
      "degree": "Graduação em Administração",
      "date": "2011-2016",
      "url": "http://unisantos.br"
    }
  ],
  "onlineCourses": [
    {
      "name": "Udacity Frontend Nanodegree",
      "school": "Udacity",
      "date": "2016",
      "url": "http://www.udacity.com"
    }
  ]
}

// projects


var projects = {
  "title": "Instalação de software ERP",
  "date": "12/2016-06/2017",
  "description": "Inserção de software ERP na empresa X",
  "images": [
    "https://placekitten.com/g/200/300", "https://placekitten.com/g/300/200", "https://placekitten.com/g/150/150"
  ]
}
