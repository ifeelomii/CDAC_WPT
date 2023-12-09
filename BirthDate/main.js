function age() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  document.getElementById("age").innerHTML = `<span> ${age} </span>`;
}
