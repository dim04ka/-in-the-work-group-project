
  var items = document.querySelectorAll('.car');
  
  Array.from(items).sort(function(a, b) {
    // using ~~ to cast the value to a number instead of a string
    a = ~~a.querySelector('.make').innerText
    b = ~~b.querySelector('.make').innerText
    return a - b
  }).forEach(function(n, i) {
    n.style.order = i
  }) 