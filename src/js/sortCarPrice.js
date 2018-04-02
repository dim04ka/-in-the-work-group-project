  var items = document.querySelectorAll('.car')
  
  Array.from(items).sort(function(a, b) {
    a = ~~a.querySelector('.price').innerText
    b = ~~b.querySelector('.price').innerText
    return a - b
  }).forEach(function(n, i) {
    n.style.order = i
  })