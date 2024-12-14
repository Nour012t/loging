var userName = document.getElementById('name')
var userMail = document.getElementById('mail')
var userPassward = document.getElementById('passward')
var login = document.getElementById('login')
var signup = document.getElementById('signup')
var logout = document.getElementById('logout')
var incorrect = document.getElementById('incorrect')
var required = document.getElementById('required')
var theName= document.getElementById('thename')
var inputContainer = [];

if (localStorage.getItem('users') !== null) {
   inputContainer = JSON.parse(localStorage.getItem('users'));
}


if (login) {
   login.addEventListener('click', function () {
      if (userMail.value == "" || userPassward.value == "") {
         required.style.display = 'block'
         incorrect.style.display = 'none'
      }
      else {
         required.style.display = 'none'
         
         let isLogged = false;
         for (let i = 0; i <inputContainer.length; i++) {
            if (userMail.value === inputContainer[i].mail && userPassward.value === inputContainer[i].passward) {
               isLogged = true;
               namee = inputContainer[i].name;
               break;
             
              

            }
            else {
               isLogged = false
            }

            var namee =inputContainer[i].name
         }
         if (isLogged) {
            window.location.href = 'profile.html';
            sessionStorage.setItem('user', namee);

         }

         else {
            incorrect.style.display = 'block'
            required.style.display = 'none'


         }





      }

   }

   )
}
if (theName) {
   const user = sessionStorage.getItem('user'); 

   if (user) {
       theName.innerHTML = `Welcome ${user}`;
   } else {
       window.location.href = 'index.html'; 
   }
}

if (logout) {
   logout.addEventListener('click', function () {
       sessionStorage.clear(); 
       window.location.href = 'index.html';
   });
}


if (signup) {
  

   signup.addEventListener('click', function () {
      for (let i = 0; i <inputContainer.length; i++) {
         if (userMail.value === inputContainer[i].mail && userPassward.value === inputContainer[i].passward) {
            alert("this account already exist pls try with another one")
            return;
         }}

      if (userName.value == "" || userPassward.value == "" || userMail.value == "") {
         required.style.display = 'block'
      }

         else{
        
    
  

         
         
         sucess.style.display = 'block'
         required.style.display = 'none'
         var users = {
            name: userName.value,
            mail: userMail.value,
            passward: userPassward.value

         }
         inputContainer.push(users);
         localStorage.setItem('users', JSON.stringify(inputContainer));
 
        }
        

      
      
})
}

