var fullName=document.getElementById("fullName");
var theGender=document.getElementById("theGender");
var theEmail=document.getElementById("theEmail");
var theDate=document.getElementById("theData");
var thePhone=document.getElementById("thePhone");
var theAdress=document.getElementById("theAdress");
var nameAlert=document.getElementById("nameAlert");
var phoneAlert=document.getElementById("phoneAlert");
var emailAlert=document.getElementById("emailAlert");
var adressAlert=document.getElementById("adressAlert");
var searchInbut=document.getElementById("searchInbut");
var saveBtn=document.getElementById("saveBtn");
var allData=[];
fullName.onkeyup=function(){
    var nameRejex=/^[A-Z][a-z]{2,20}$/
    if(!nameRejex.test(fullName.value))
    {
        fullName.classList.add("is-invalid");
        fullName.classList.remove("is-valid");
        nameAlert.classList.remove("d-none");
        return false;

    }
    else{
        fullName.classList.add("is-valid");
        fullName.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");
        return true

    }
}
theEmail.onkeyup=function(){
    var nameRejex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!nameRejex.test(theEmail.value))
    {
        theEmail.classList.add("is-invalid");
        theEmail.classList.remove("is-valid");
        emailAlert.classList.remove("d-none");
        return false;

    }
    else{
        theEmail.classList.add("is-valid");
        theEmail.classList.remove("is-invalid");
        emailAlert.classList.add("d-none");
        return true

    }
}
thePhone.onkeyup=function(){
    var nameRejex=/^01[0125][0-9]{8}$/
    if(!nameRejex.test(thePhone.value))
    {
        thePhone.classList.add("is-invalid");
        thePhone.classList.remove("is-valid");
        phoneAlert.classList.remove("d-none");
        return false;

    }
    else{
        thePhone.classList.add("is-valid");
        thePhone.classList.remove("is-invalid");
        phoneAlert.classList.add("d-none");
        return true

    }
}
theAdress.onkeyup=function(){
    var nameRejex=/^[A-Z][a-z]{2,20}$/
    if(!nameRejex.test(theAdress.value))
    {
        theAdress.classList.add("is-invalid");
        theAdress.classList.remove("is-valid");
        adressAlert.classList.remove("d-none");
        return false;

    }
    else{
        theAdress.classList.add("is-valid");
        theAdress.classList.remove("is-invalid");
        adressAlert.classList.add("d-none");
        return true

    }
}
if(JSON.parse(localStorage.getItem("data"))!=null){
    allData=JSON.parse(localStorage.getItem("data"));
    dispalyData();
}
function addData(){
    if(validation()){
    var data={
    name:fullName.value,
    gender:theGender.value,
    email:theEmail.value,
    data:theDate.value,
    phone:thePhone.value,
    adress:theAdress.value,
};
allData.push(data);
localStorage.setItem("data",JSON.stringify(allData));
dispalyData();
console.log(allData);
clearData();
    }
  else{
      window.alert("ddddddddddddddddddddddddddddddddddddddd")
  }
}
function validation(){
    if(fullName.value!=""&& theGender.value!=""&& theAdress.value!=""&&theEmail.value!=""&&theDate.value!=""&&thePhone.value!=""){
        return true;
    }
    else{
        return false;
    }
}
function dispalyData(){
    var cartona="";
    for(var i=0;i<allData.length;i++){
        cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${allData[i].name}</td>
        <td>${allData[i].gender}</td>
        <td>${allData[i].email}</td>
        <td>${allData[i].data}</td>
        <td>${allData[i].phone}</td>
        <td>${allData[i].adress}</td>
        <td><i class="bi bi-trash-fill" onclick="deleteData(${i})"></i></td>

        </tr>
        `
    }
    document.getElementById("trs").innerHTML=cartona;
}
function search(val){
    var cartona="";
    for(var i=0;i<allData.length;i++){
        if(allData[i].name.toLowerCase().includes(val.toLowerCase())){
        cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${allData[i].name}</td>
        <td>${allData[i].gender}</td>
        <td>${allData[i].email}</td>
        <td>${allData[i].data}</td>
        <td>${allData[i].phone}</td>
        <td>${allData[i].adress}</td>
        <td><i class="bi bi-trash-fill" onclick="deleteData(${i})"></i></td>
        </tr>
        `
    }
        }
      
    document.getElementById("trs").innerHTML=cartona;
}
function clearData(){
    fullName.value="";
    theGender.value="";
    theEmail.value="";
    theDate.value="";
    thePhone.value="";
    theAdress.value="";
}
function deleteData(index){
allData.splice(index,1);
dispalyData();
localStorage.setItem("data",JSON.stringify(allData));
}
