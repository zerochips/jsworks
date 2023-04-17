//bigPic 과 smallPic 선택 해야죠
//이미지 바꾸기 bigPic 부터 선택할게요
//-------------------------- 준비물 세팅하기 --------------------------
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
//querySelectorAll 을 해야지 querySelector 을 하면 오류 출력
console.log(smallPics.length);

//smallPics[0].onclick = showBig;

//---------------- 클릭 이벤트 발생 - 클릭하면 이미지가 변경돼요 ----------------
/* for(let i=0; i<smallPics.length; i++){
    //smallPics[i].onclick = showBig; //showBig() 호출

    //addEventListener() 이벤트 처리기(접두어 'on'을 붙이지 않음)
    smallPics[i].addEventListener("click", function(){
        console.log(this.src);  //클릭한 대상(자기자신)
        bigPic.setAttribute("src", this.src);
    });
} */

//------------- 마우스오버 해볼게요 - 마우스 이동하면 이미지가 변경돼요 -------------
for(let i=0; i<smallPics.length; i++){
    //smallPics[i].onclick = showBig; //showBig() 호출

    //addEventListener() 이벤트 처리기(접두어 'on'을 붙이지 않음)
    smallPics[i].addEventListener("mouseover", function(){
        console.log(this.src);  //클릭한 대상(자기자신)
        bigPic.setAttribute("src", this.src);
    });
}

//------------- 여긴 바로 위로 이동했는데 왜 살려둔거지? -------------
function showBig(){
    console.log(this.src);  //클릭한 대상(자기자신) - 그럼 자기자신이죠
    bigPic.setAttribute("src", this.src);
    
}