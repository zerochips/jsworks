window.onload = function(){
    let text = document.querySelector("h1");

    //window 객체 scroll 이벤트 구현
    window.addEventListener('scroll', function(){
        /* y값이 나옴 */
        let value = this.window.scrollY;
        console.log(value);

        if(value > 300){
            /* forwards 유지 */
            text.style.animation = "back_slide 1s ease-out forwards";
        }else{
            text.style.animation ="go_slide 1s ease-out";
        }
    })
}