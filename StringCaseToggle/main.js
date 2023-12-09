function uCase() {
  let str = document.getElementById("input").value;
  let res = str.toUpperCase();
  document.getElementById("result").innerHTML ="<span>"+ res +"</span>";
}
function lCase() {
  let str = document.getElementById("input").value;
  let res = str.toLowerCase();
  document.getElementById("result").innerHTML ="<span>"+ res +"</span>";
}
function tCase() {
  let str = document.getElementById("input").value;
  let str1 = str.charAt(0).toUpperCase();
  let str2 = str.substring(1).toLowerCase();
  let res = str1 + str2;
  document.getElementById("result").innerHTML ="<span>"+ res +"</span>";
}
function cCase(){
    let str = document.getElementById("input").value;
    let strarr = str.split(" ");
    // console.log(strarr);
    var resarr=[];
    var i=0;
    strarr.forEach(e => {
        let str1= e.charAt(0).toUpperCase();
        let str2= e.substring(1).toLowerCase();
        let res = str1 + str2;
        resarr[i] = res;
        // console.log(resarr[i])
        i++;
    });
    var string="";
    resarr.forEach(e => {
        string = string+" "+e;
    });
    // console.log(string);
    document.getElementById("result").innerHTML ="<span>"+ string +"</span>";
}