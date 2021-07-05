const submitBtn = document.querySelector(".submit__btn");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const dob = document.querySelector(".dob");
const state = document.querySelector(".state");
const gender = document.querySelector(".gender");
const residence = document.querySelector(".residence");
const physicalChallenges = document.querySelector(".physical-challenges");
const maritalStatus = document.querySelector(".maritalstatus");
const educationLevel = document.querySelector(".educationlevel");
const religion = document.querySelector(".religion");
const telephone = document.querySelector(".telephone");
const employment = document.querySelector(".employment");
const email = document.querySelector(".email");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  confirm("Are you sure you want to submit your form?");
  alert("Registration successful");
});
