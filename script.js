// DONE button to be added at end of each item
var myList = document.getElementsByTagName("LI");
for (var i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\b DONE");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click DONE to delete item from list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add new item on list with text from Input
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Missing Text!");
  } else {
    document.getElementById("unorderedList").appendChild(li);
  }
  document.getElementById("newInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\bDONE");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}