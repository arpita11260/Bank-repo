document.getElementById('submit-btn').addEventListener('click',function(){

              // email part
   const emailField =  document.getElementById('user-email');
   const userEmail = emailField.value;
   console.log(userEmail);
             // password part
const passwordField =  document.getElementById('user-password');
   const userPassword = passwordField.value;
   console.log(userPassword);

   if(userEmail == 'sristy@gmail.com' && userPassword == 'arpita'){
        window.location.href = 'bnaking.html';
   }
})