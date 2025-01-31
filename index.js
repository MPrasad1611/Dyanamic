let display = document.getElementById("display");
function input(event) {
  //    console.log(event.target.value)
  display.value += event.target.value;
}
function mea() {
  let exp = display.value;
  let result = eval(exp);
  display.value = result;
}
function del() {
  display.value = display.value.slice(0, -1);
}
function allclear(){
    display.value="";
}