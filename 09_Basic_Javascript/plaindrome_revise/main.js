function checkPalindrome()
{
    const inputText = document.getElementById("inputText").value.toLowerCase();
    
    const reversedText = inputText.split("").reverse().join("")
    
   if(inputText === reversedText)
   {
    document.getElementById("result").innerHTML = "Yes, it is a Palindrome";
   }
   else{
    document.getElementById("result").innerHTML = "No, it is not a Palindrome";
   }
}