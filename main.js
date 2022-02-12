window.addEventListener('scroll', reveal);

function reveal (){
   var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowsHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowsHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}