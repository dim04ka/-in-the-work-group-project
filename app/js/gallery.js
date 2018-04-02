var largeImg = document.getElementById('largeImg');
    document.getElementById('thumbs').onclick = function(event) {
    var target = event.target;
        while (target != this) { 
            if (target.nodeName == 'A') {
            showThumbnail(target.href, target.title);
            return false; 
            }
                target = target.parentNode; 
            }
    }
    function showThumbnail(href, title) { 
        largeImg.src = href;
        largeImg.alt = title;
    }

    var array = new Array(
        "./img/auto1.jpg",
        "./img/auto2.jpg",
        "./img/bmwx6.jpg"
      );
      var i = 0;
      function left() {
        var image = document.getElementById("largeImg");
        i--;
        if (i < 0) i = array.length - 1;
        image.src = array[i];
      }
      function right() {
        var image = document.getElementById("largeImg");
        i++;
        if (i == array.length) i = 0;
        image.src = array[i];
      }    