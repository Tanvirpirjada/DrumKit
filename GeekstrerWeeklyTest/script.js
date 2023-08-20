
document.addEventListener("keypress", function(e){
     sound(e.key);
});

function sound(key){
    switch(key){
        case 'w':
            var audio=new Audio("sounds/mixkit-armhole-farting-3051.wav");
            audio.play();
            break;
            case 'a':
            var audio=new Audio("sounds/mixkit-cartoon-fail-blow-fart-3053.wav");
            audio.play();
            break;
            case 's':
            var audio=new Audio("sounds/mixkit-cartoon-fart-sound-2891.wav");
            audio.play();
            break;
            case 'd':
            var audio=new Audio("sounds/mixkit-cartoon-fart-triple-3055.wav");
            audio.play();
            break;
            case 'j':
            var audio=new Audio("sounds/mixkit-cartoon-quick-splat-2890.wav");
            audio.play();
            break;
            case 'k':
            var audio=new Audio("sounds/mixkit-cartoon-strong-fart-3050.wav");
            audio.play();
            break;
            case 'l':
            var audio=new Audio("sounds/mixkit-funny-cartoon-fast-splat-2889.wav");
            audio.play();
            break;
    }
}