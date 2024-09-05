(function() {
  function $(id) {
    return document.getElementById(id);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const images = [
      { url: 'images/img_1.jpg', link: 'https://example.com/page1' },
      { url: 'images/img_2.jpg', link: 'https://example.com/page2' },
      { url: 'images/img_3.jpg', link: 'https://example.com/page3' }
  ]

    let currentImageIndex = 0;
    const slider = document.getElementById('slider');

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        slider.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
    }

    // Change image every 5 seconds
    setInterval(changeImage, 5000);
});

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      audio = $('audio'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });


  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
