var btn = document.querySelector('.btn');
    btn.addEventListener('click', addResult);




function addResult () {
  event.preventDefault();

var res = document.querySelector('.info table');

  var elemInp = document.querySelectorAll('.inp');
    for (var i = 0; i < elemInp.length; i++) {

      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.innerHTML = elemInp[i].value;
      tr.appendChild(th);
      res.appendChild(tr);
    }



}
