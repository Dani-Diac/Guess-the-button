
function check_btn(id) {
  var correct_btn = Math.round(Math.random() * 2) + 1 ;
  if (id == correct_btn) {
    alert("You won!");
  } else {
    alert("You lose!")
  }
}
