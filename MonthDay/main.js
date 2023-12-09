function showmonth() {
  let mth = document.getElementById("month").value;
  let arr = {
    1: "January",
    2: "Feburary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  console.log(arr[mth]);
  document.getElementById("spm").innerHTML = arr[mth];
}
function showweek() {
  let week = document.getElementById("week").value;
  let arr = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
  };

//   let res = arr[mth];
  console.log(arr[week]);
  document.getElementById("spw").innerHTML = arr[week];
}
