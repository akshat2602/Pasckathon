// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml1 .letters');

console.log(textWrapper)



textWrapper.forEach(myFunction);

function myFunction(item, index) {
  item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}



   
      console.log('present')
      anime.timeline({loop: 1})
      .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
      }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
      }).add({
      targets: '.ml1',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
      });
    
  

  



	


 

