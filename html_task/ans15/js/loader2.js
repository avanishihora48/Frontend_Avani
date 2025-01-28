myVar
function myFunction() {
  myVar = setTimeout('display()', 4000)
}

function display() {
  document.getElementById('loader').style = 'display:none'
  document.getElementById('mySection').style = 'display:block'
}
