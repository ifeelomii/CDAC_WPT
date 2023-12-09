//Calculation
function calculate() {
  //Input from UI
  var f = parseInt(document.getElementById("fr").value);
  var t = parseInt(document.getElementById("to").value);
  var amount = parseInt(document.getElementById("amt").value);
  var result = 0;
  // console.log(amount);
  // console.log(f);
  // console.log(t);
  // console.log(result);

  switch (f) {
    case 1: {
      result = amount * 83.38;
      console.log(amount);
      console.log("Case 1");
      break;
    }

    case 2: {
      result = amount * 270.5;
      console.log("Case 2");
      break;
    }
    case 3: {
      result = amount * 104.87;
      console.log("Case 3");
      break;
    }
  }
  document.getElementById("sp").innerHTML = result;
}
