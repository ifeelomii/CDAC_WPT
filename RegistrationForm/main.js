var rno=0;
function addTable() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var education = document.querySelector(`input[type="checkbox"]:checked`).value;
  var genders = document.querySelector(`input[type="radio"]:checked`).value;
  var n =fname+" "+lname;

  let row = document.getElementById("tbody").insertRow(rno);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    
    
    cell0.innerHTML = n;
    cell1.innerHTML = add;
    cell2.innerHTML = city;
    cell3.innerHTML = education;
    cell4.innerHTML = gender;
    rno++;
  //document.getElementById("tbody").innerHTML = "<th>" + fname+"</th>"+"<th>" + lname+"</th>"+"<th>" + address +"</th>"+"<th>" + state+"</th>"+"<th>" + education+"</th>"+"<th>" + genders+"</th>";

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
