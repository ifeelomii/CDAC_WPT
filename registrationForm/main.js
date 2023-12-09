var rno = 0;
function addTable()
{
    let n = document.getElementById("name").value;
    let add = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let edu = document.querySelector(`input[type="checkbox"]:checked`).value;
    let gender = document.querySelector(`input[type="radio"]:checked`).value;


    // document.getElementById("tbody").innerHTML = "<tr>"+"<td>"+n+"</td>"+"<td>"+add+"</td>"+"<td>"+city+"</td>"+"<td>"+edu+"</td>"+"<td>"+gender+"</td>"+"</tr>";

    // let res =`"<td>"+${"n"}+"</td>"+"<td>"+${"add"}+"</td>"+"<td>"+${"city"}+"</td>"+"<td>"+${"edu"}+"</td>"+"<td>"+${"gender"}+"</td>"`; 
    // document.getElementById("tbody").innerHTML=res+"<br>";

    console.log(edu);
    let row = document.getElementById("tbody").insertRow(rno);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    
    
    console.log(edu);
    cell0.innerHTML = n;
    cell1.innerHTML = add;
    cell2.innerHTML = city;
    cell3.innerHTML = edu;
    cell4.innerHTML = gender;
    rno++;

    event.preventDefault();
}