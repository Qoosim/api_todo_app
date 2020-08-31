const getTasks = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Add json stuff
      let container = document.getElementById('container')
      let responses = JSON.parse(this.responseText);

      for (let i = 0; i < responses.length; i++) {
        container.insertAdjacentHTML(
          'beforeend', '' + responses[i].id + '. ' + responses[i].task + '<br />'
          )
      }
    }
  }
  xhttp.open('GET', 'http://localhost:3001/todos', true);
  xhttp.send();
}

getTasks()