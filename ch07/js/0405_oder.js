//체크 박스 속성에 이벤트 처리하기
window.onload = function(){  //익명 실행 함수 변수가 같이 있을 땐 window.onload를 사용해서 감싸줘야한다
        let check = document.querySelector("#shppingInfo");

    //체크 이벤트 구현
    check.addEventListener("click", checkBox);

    let billingName = document.getElementById("billingName");
    let billingTel = document.getElementById("billingTel");
    let billingAddr = document.getElementById("billingAddr");

    let shppingName = document.getElementById("shppingName");
    let shppingTel = document.getElementById("shppingTel");
    let shppingAddr = document.getElementById("shppingAddr");

    function checkBox(){
        //체크시 기본 정보 값을 배송 정보에 저장
        if(check.checked == true){  //체크 박스에 체크 되었다면
            shppingName.value = billingName.value;
            shppingTel.value = billingTel.value;
            shppingAddr.value = billingAddr.value;
        }else{
            //체크해제시 check.checked == false 입력 상자 공백 초기화
            shppingName.value = "";
            shppingTel.value = "";
            shppingAddr.value = "";
        }
    }

}


