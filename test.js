var test = document.getElementById("belgium");


test.addEventListener("mouseover", function() {
  test.setAttribute('style','-webkit-filter: brightness(1.5)');},false);
  // highlight the mouseenter target

  image.addEventListener('mouseout', function() { 
    test.setAttribute('style','-webkit-filter: brightness(1.0)'); 
}, false);