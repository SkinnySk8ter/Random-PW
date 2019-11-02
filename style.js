
var userInput = passwordChars;
var lowerCaseLetters = [a-z];
var upperCaseLetter = [A-Z];
var digits = [0-9];
var diffsymb = ["#","@","!","%","&","(",")","/"]
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#A!%&()/"

function makepwd(){
document.getElementById("checkbox").addEventListener("click", function(){
if (i = 0; i===lowerCaseLetters.length || i === upperCaseLetter || i === digits || i === diffsymb; i++)
})

}





function random_password_generate(max,min)
                {
                    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
                    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
                    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
                    return randPassword;
                }
                document.getElementById("generatePassword").addEventListener("click", function(){
                    random_password = random_password_generate(16,8);
                    document.getElementById("randomPassword").value = random_password;
                });





 }