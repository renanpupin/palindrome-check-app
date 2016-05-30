document.getElementById("checkPalindrome").addEventListener("click", checkPalindrome);

function checkPalindrome(e){
    e.preventDefault();
    document.querySelector("#message").innerHTML = "";
    var str = document.querySelector("#str").value;
    if(str !== ""){
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/api/palindrome/'+str, true);

        request.onload = function() {
          if (request.status === 200) {
            // 200 response
            document.querySelector("#message").innerHTML = "200 - Your string is palindrome!";
          } else if(request.status === 400){
            // 400 response
            document.querySelector("#message").innerHTML = "400 - Your string is not palindrome!";
          }else{
            alert("Sorry, something went wrong! :(");
          }
        };

        request.onerror = function() {
          alert("Sorry, something went wrong! :(");
        };

        request.send();
    }else{
        alert("Fill the field!");
    }
}