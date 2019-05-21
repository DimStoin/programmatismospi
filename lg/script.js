


function checkname() {
var name=document.getElementById("name");
if (name.value.length==0 || name.value==" ")
{alert("Λάθος στo όνομα"); 
 name.style.backgroundColor='#e35152';
} else name.style.backgroundColor='#ccffcc'; } //telos chackname()
function checkmail() {
var mymail=document.getElementById("email");
var atposition=mymail.value.indexOf("@");
var dotposition=mymail.value.lastIndexOf(".");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mymail.length)
 { alert("Λάθος στη διεύθυνση e-mail");
 
 mymail.style.backgroundColor='#e35152'; } else
 mymail.style.backgroundColor='#ccffcc'; }

