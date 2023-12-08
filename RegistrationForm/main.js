function addTable() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var education = document.querySelector(`input[type="checkbox"]:checked`).value;
  var genders = document.querySelector(`input[type="radio"]:checked`).value;
  

  document.getElementById("tbody").innerHTML = "<th>" + fname+"</th>"+"<th>" + lname+"</th>"+"<th>" + address +"</th>"+"<th>" + state+"</th>"+"<th>" + education+"</th>"+"<th>" + genders+"</th>";

  event.preventDefault();
    
}

/* let s1 = "hello";
let s2 = "hello";
let s3 = new String("hello");
let s4 = new String("hello");

(s1 == s2) ? console.log("true") : console.log("false");
(s2 == s4) ? console.log("true") : console.log("false");
(s1 == s3) ? console.log("true") : console.log("false");
(s3 == s4) ? console.log("true") : console.log("false");


(s1 === s2) ? console.log("true") : console.log("false");
(s2 === s4) ? console.log("true") : console.log("false");
(s1 === s3) ? console.log("true") : console.log("false");
(s3 === s4) ? console.log("true") : console.log("false");*/
