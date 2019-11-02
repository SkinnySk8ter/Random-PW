
var userInput = passwordChars;
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var digits = [0,1,2,3,4,5,6,7,8,9];
var diffsymb = ["#","@","!","%","&","(",")","/"];
smallLetters = document.getElementById(lowerCaseClick);
bigLetters = document.getElementById(upperCaseClick);
integers = document.getElementById(numbers);


                    function validateCheckbox() {
                    userPassword = "";
                    passwordCharSet = "";
                    
                    if (smallLetters.checked) {
                      passwordCharSet += lowerCaseLetters;
                    }
                    if (bigLetters.checked) {
                      passwordCharSet += upperCaseLetter;
                    }
                    if (punctuationClick.checked) {
                      passwordCharSet += punctuation;
                    }
                    if (numbersClick.checked) {
                      passwordCharSet += numbers;
                    }
                    passwordlength = Number(lengthInput.value);
                   
                    for (let i = 0; i < plength; i++) {
                      userPassword += passwordCharSet.charAt(
                        Math.floor(Math.random() * passwordCharSet.length)
                      );
                      }

                      function random_password_generate(max,min)
                {
                    var passwordChars = [lowerCaseLetters,upperCaseLetter,digits,diffsymb];
                    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
                    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
                    return randPassword;
                }
                document.getElementById("generatePassword").addEventListener("click", function(){
                    random_password = random_password_generate(128,8);
                    document.getElementById("randomPassword").value = random_password;
                });