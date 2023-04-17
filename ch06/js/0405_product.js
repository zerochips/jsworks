//bigPic 과 smallPic 선택 해야죠
//이미지 바꾸기 bigPic 부터 선택할게요
//-------------------------- 준비물 세팅하기 --------------------------
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
console.log(smallPics.length);

//---------------- 클릭 이벤트 발생 - 클릭하면 이미지가 변경돼요 ----------------
for(let i=0; i<smallPics.length; i++){
    //smallPics[i].onclick = showBig; //showBig() 호출

    //addEventListener() 이벤트 처리기(접두어 'on'을 붙이지 않음)
    smallPics[i].addEventListener("click", function(){
        console.log(this.src);  //클릭한 대상(자기자신)
        bigPic.setAttribute("src", this.src);
    });
}

//---------------- 상세 설명 보기 ----------------
//준비물을 세팅해주세요
let view = document.getElementById("view");
let detail = document.getElementById("detail");

//토글 프로그래밍 - sw 는 스위치란 말입니다
let sw = true;

view.addEventListener("click", function(){
    if(sw){                                 //sw 상태변수가 들어온다
        detail.style.display = "block";
        view.innerText = "상세 설명 닫기";
        sw = false;
    }else{
        detail.style.display = "none";
        view.innerText = "상세 설명 보기";
        sw = true;
    }
});

