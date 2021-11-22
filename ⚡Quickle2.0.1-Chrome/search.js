let searchbutton = document.getElementById('search-btn');
searchbutton.style.backgroundColor = '#e8e8e8';
let field = document.getElementById('searchfield');
let searchBtn = document.getElementById('search-button');

function getTerm () {
    let fieldLength = field.value.length;
    let output = ""
    for (let x = 0; x < fieldLength; x++) {
        if (field.value.charAt(x) != " ") {
            output = output + field.value.charAt(x);
        } else {
            output = output + "+";
        }
    }
    return output;
}

function search () {
    window.open('https://www.google.com/search?q=' + getTerm());
}


searchBtn.addEventListener('click', search);
field.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      search()
    }
  }); 