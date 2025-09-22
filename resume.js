// Define Variables
let myName = "Ethan Fender";
let myEmail = "ethanfender1@gmail.com";
let title = "Student Athlete";
let experience = "Baseball, Business Student, and Strength Training";
let education = "Oral Roberts University";
let skills = "Energetic, hard working, communication";
function showFunFact() {
 alert("Fun Fact: I love to Hunt!");
}

//Connect Varibles to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
document.getElementById("skills").textContent = skills;
