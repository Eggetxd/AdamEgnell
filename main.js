function dropDownClick() {
    document.getElementById("dropDown").classList.toggle("showDropDown");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropDownButton')) {
        document.getElementById("dropDown").classList.remove('showDropDown');
    }
}