
var  Objectcards = document.getElementsByClassName('mySlides')

var cards = Object.keys(Objectcards).map(function(key) {
  return Objectcards[key]
});


var slideIndex = 0;
showSlide(slideIndex);

function plusSlides(n){
  slideIndex += n;
  showSlide(slideIndex)
}


console.log(cards);


function showSlide(n){
    var showCards= 3
    var button_next = document.getElementById('next')
    var button_prev = document.getElementById('prev')
    console.log(button_next);

    if(n > cards.length){ slideIndex = 0; }
    if (n < 0){ slideIndex = 0; n=0
    }

    if (n== 0) {
      button_prev.style.display = 'none '
    }else{
      button_prev.style.display = 'block '
    }
    for (var i = 0; i < cards.length; i++) {
          cards[i].style.display = "none"
    }
    let count = n+ showCards
    let count2 = count +1;

    if(count < cards.length){
      for (var i = n ; i <= count; i++) {
          cards[i].style.display = 'block';

      }

    }
    if (count2  == cards.length) {
      for (var i = n ; i <= count; i++) {
          cards[i].style.display = 'block';
          button_next.style.display = 'none'
      }

    }else{
      button_next.style.display = 'block '
    }


}
