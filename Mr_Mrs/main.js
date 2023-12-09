function male() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  let str1 = fname.charAt(0).toUpperCase();
  let str2 = fname.substring(1).toLowerCase();
  let res1 = str1 + str2;
  let str3 = lname.charAt(0).toUpperCase();
  let str4 = lname.substring(1).toLowerCase();
  let res2 = str3 + str4;

  document.getElementById("display").innerHTML = `<span> Mr. ${res1} ${res2} </span>`;
}
function female() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  let str1 = fname.charAt(0).toUpperCase();
  let str2 = fname.substring(1).toLowerCase();
  let res1 = str1 + str2;
  let str3 = lname.charAt(0).toUpperCase();
  let str4 = lname.substring(1).toLowerCase();
  let res2 = str3 + str4;

  document.getElementById("display").innerHTML = `<span> Mrs. ${res1} ${res2} </span>`;
}
