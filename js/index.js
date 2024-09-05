(function() {
  function $(id) {
    return document.getElementById(id);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        'https://shorturl.at/NIJms',
        'https://shorturl.at/BvnEK',
        'https://shorturl.at/2O68j',
        'https://shorturl.at/ymCxJ',
        'https://shorturl.at/znJi7',
        'https://shorturl.at/TmwSz'
        
    ];

    let currentImageIndex = 0;
    const slider = document.getElementById('slider');

  function loadImage(url, callback) {
      const img = new Image();
      img.src = url;
      img.onload = () => callback(url); // Image loaded successfully
      img.onerror = () => callback('fallback-image.jpg'); // Fallback image on error
  }


    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        loadImage(imageUrls[currentImageIndex], (url) => {
          slider.style.backgroundImage = `url('${url}')`;
      });
    }

    // Change image every 5 seconds
    setInterval(changeImage, 2500);
});

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      audio = $('audio'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    audio.play();
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
