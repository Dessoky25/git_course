// get all element in to variable

var inputEl = document.getElementById("input"),
  buttonEl = document.getElementById("btn"),
  mesgEl = document.getElementById("message");
// add event

buttonEl.onclick = function () {
  // get value frome input
  var inputValue = inputEl.value;
  if (inputValue != "") {
    //   add value in p
    mesgEl.innerHTML = inputValue;
    //   empty input value
    inputEl.value = "";
  }
};
