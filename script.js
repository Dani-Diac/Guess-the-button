var correctBtn = null;


function createButtons() {
  var input = document.getElementById('getInputValue').value;
  if (input < 1 || input > 100) {
    alert("Please write a number between 1-100!")
    return false;
  }
  correctBtn = Math.floor(Math.random() * input);
  for (let i = 0; i < input; i++) {
    $('#buttons').append('<button type="button"  id='+ i +' onclick="return checkBtn(this.id)"> Click me! </button>');
  }
  document.getElementById("getInputValue").style.display="none";
  document.getElementById("createBtns").style.display="none";
  return fals
}


function checkBtn(id) {
  if (id == correctBtn) {
    alert("You're guess it's right!");
    location.reload();
  } else {
    alert("You're wrong!")
    return false;
  }
}
