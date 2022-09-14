document.getElementById("addition").addEventListener("click", clicked)
function clicked(){
   var n1 = document.getElementById("n1")
   var n2 = document.getElementById("n2")
   var n1 = Number(n1.value)
   var n2 = Number(n2.value)
   var s = (n1 + n2)
   var result = document.getElementById("result-txt")
   result.innerText = s

} 