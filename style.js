
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var digits = [0,1,2,3,4,5,6,7,8,9];
var diffsymb = ["#","@","!","%","&","(",")","/"];
var smallLetters = document.getElementById("lowerCaseClick");
var bigLetters = document.getElementById("upperCaseClick");
var integers = document.getElementById("numbers");








askuser();


            function askuser() {
              var pwlength = prompt("How many letters would you like in your code?");
              while (pwlength < 8 || pwlength > 128){
                alert("Invalid choice...TRY AGAIN")

             pwlength = prompt("Password needs to be between 8 and 128 characters!")
              }
              var uppercase = prompt("Y/N for UPPERCASE letters?");
              if (uppercase === "Y"){
                alert("Uppercase letters will be included");
              }
              else {
                alert("lowercase letters incoming!");

                var lowercase = prompt("How about lowercase? Y/N?");
                if (lowercase === "Y"){
                  alert("lowercase letters coming right up!");
                }
                else{
                  alert("The choices are becoming more limited....");
                }
                var onetwo = prompt("Would you like to include integers/symbols in your password? Y/N?");
                if (onetwo === "Y") {
                  alert("Numbers Incoming!")
                }
                else {
                  alert("well that's unfortunate..")
                }

              }





            }




            // function validateCheckbox() {
            // userPassword = "";
            // passwordCharSet = "";
            
            // if (smallLetters.checked) {
            //   passwordCharSet += lowerCaseLetters;
            // }
            // if (bigLetters.checked) {
            //   passwordCharSet += upperCaseLetter;                   
            
            // if (integers.checked) {
            //   passwordCharSet += digits;
            // }
            // passwordlength = Number(lengthInput.value);
            
            // for (let i = 0; i < plength; i++) {
            //   userPassword += passwordCharSet.charAt(
            //     Math.floor(Math.random() * passwordCharSet.length)
            //   );
            //   }

        //       function random_password_generate(passwordChars)
        // {
        //     var passwordChars = [lowerCaseLetters,upperCaseLetter,digits,diffsymb];
        //     var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
        //     var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
        //     return randPassword;
        // }
        // document.getElementById("generatePassword").addEventListener("click", function(){
        //     random_password = random_password_generate(128,8);
        //     document.getElementById("randomPassword").value = random_password;
        // });
