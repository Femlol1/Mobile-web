
function goToSignUp(){
  window.location='./sign_up.html';
}
function autohorise(){
  var autohorised;

  // gets the input values 
  var email = document.getElementById("lEmail").value;
  var password = document.getElementById("lPassword").value;

  //
  if(email == "test@mail.com" && password == "tester123") {
    
    autohorised = true;
    
    return  window.location='home.html'

  }else if (email != "test@mail.com"){
    return alert("Sorry, The email is incorrect ");

  }else if (password != "tester123"){
    return alert("Sorry, The password is incorrect ");
  }else{
    autohorised = false;

    alert("Sorry, The email or password is incorrect. ");

  }
  return autohorised}
 



function goForgotPassword(){
  window.location='./fogot_Password.html';
}
function fPassword(){
  var email = document.getElementById("lEmail").value;
  if (email != ""){
  alert("A link to update your password will be sent to your email address ");
    return window.location='./index.html'
    
}else{
  return alert("Please type in your email address")
}
}
function deleteacc(){
  
  const doDelete = confirm("Are you sure you want to delete your account ?");

                if (doDelete) {
                  window.location='./index.html';
                }


}
//navigation buttons 
function logout(){
  window.location='./index.html';
}
function sign_up(){
  window.location='./index.html'
}
function goHomePage(){
  window.location='./home.html'

}
function goCalenderPage(){
  window.location='./calender.html'
}
function goSchedulePage(){
  window.location='./schedule.html'
}
function goMealPlanPage(){
  window.location='./mealplan.html'
}
function goNotesPage(){
  window.location='./notes.html'
}
function goExercisePage(){
  window.location='./excercise.html'
}
function goSettingsPage(){
  window.location='./settings.html'
}
function indexBACK(){
  window.location='./index.html'
}
function date() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementById("current_date").innerHTML = today;

var d = new Date();
var n = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;
document.getElementById("current_time").innerHTML = n;
}

function schedule() {

  var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodelist[i].appendChild(span);
        }
        
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
        
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
          }
        }, false);
        
        
}
function newElement() {
          var li = document.createElement("li");
          var inputValue = document.getElementById("myInput").value;
          var t = document.createTextNode(inputValue);
          li.appendChild(t);
          if (inputValue === '') {
          alert("You must write something!");
          } else {
          document.getElementById("tl").appendChild(li);
          }
          document.getElementById("myInput").value = "";
        
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);
        
          for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
          }
        }