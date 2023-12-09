function calculate() {
  let x = parseInt(document.getElementById("n1").value);
  let y = parseInt(document.getElementById("n2").value);
  let op = document.getElementById("opr").value;
  let res;
  console.log(op);
  switch (op) {
    case '+':
      res = x + y;
      break;
    case '-':
      res = x - y;
      break;
    case '*':
      res = x * y;
      break;
    case '/':
      res = x / y;
      break;
  }
  console.log(res);
  document.getElementById("sp").innerHTML = `${x} ${op} ${y} = ${res}`;
}
