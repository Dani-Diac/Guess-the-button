var correct_btn = Math.round(Math.random() * 2) + 1 ;
function check_btn(id) {
  if (id == correct_btn) {
    alert("You're guess it's right. Try again!");
  } else {
    alert("You're wrong!")
    return false;
  }
}
