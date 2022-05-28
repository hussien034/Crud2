function date_time(id) {
    date = new Date();
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("s").innerHTML = "" + s;
    document.getElementById("m").innerHTML = "" + m;
    document.getElementById("h").innerHTML = "" + h;
    setTimeout('date_time("' + "s" + '");', "1000");
    return true;
}
window.onload = date_time("s");
var mainIn = document.getElementById("main-inp");
var addBt = document.getElementById("add_bt");
var d = document.getElementById("d");
var allData = [];
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
if (JSON.parse(localStorage.getItem("data")) != null) {
    allData = JSON.parse(localStorage.getItem("data"));
    dispalyData();
}

function addData() {
    if (validation()) {
        var data = {
            name: mainIn.value,
            times: dateTime,
        };
        allData.push(data);
        localStorage.setItem("data", JSON.stringify(allData));
        dispalyData();
        reload();
        clearData();

    } else {
        window.alert("please add your task")
    }
}

function dispalyData() {
    var cartona = "";
    for (var i = 0; i < allData.length; i++) {
        cartona += `
        <tr id="d">
        <td>${i+1}</td>
       
        <td>${allData[i].name}</td>
        <td>${allData[i].times}</td> 
        <td><i class="bi bi-trash-fill" onclick="deleteData(${i})"></i></td>
        <td><i class="bi bi-check2-all" onclick="cor(${i})"></i><td>
        </tr>
        `
    }
    document.getElementById("display").innerHTML = cartona;
}

function reload() {
    document.location.reload(true)
}

function validation() {
    if (mainIn.value != "") {
        return true;
    } else {
        return false;
    }
}

function deleteData(index) {
    allData.splice(index, 1);
    dispalyData();
    localStorage.setItem("data", JSON.stringify(allData));
}

function cor(index) {
    allData.splice(index, 0);
    document.getElementById("display").innerHTML =
        `<div  class="alert  alert-primary d-flex justify-content-between" role="alert">
        <h3>This work is completed</h3>
        <i class="bi bi-check2-all" onclick="deleteData()"></i>
      </div>`;
    localStorage.setItem("data", JSON.stringify(allData));
}

function clearData() {
    mainIn.value = "";

}
jQuery(document).ready(function() {

    jQuery('#load').fadeOut(3000);

});