window.onload = function(){
    //유효성 검사
    let id = document.getElementById("user-id");  //정확하게 하려면 value 까지 들어가야하죠! 안들어간 이유가 있어요 나중에 설명할게요
    let pw1 = document.getElementById("user-pw1");
    let pw2 = document.getElementById("user-pw2");

    //이제 어떤게 중요하냐면 내가 abc를 쓰고 마우스가 떠났을 때 창이 떠야겠죠
    //onchange 속성 - 포커스가 입력상자를 벗어났을 때 작동
    id.onchange = checkId;
    pw1.onchange = checkPw;
    pw2.onchange = comparePw;
    //그럼 체크 아이디 만들어 볼게요
    function checkId(){
        if(id.value.length < 4 || id.value.length > 12){
            alert("4~12 자리로 입력해 주세요");
            id.select();  //현재 텍스트 범위 선택(지정)
        }    
    }

    function checkPw(){
        if(pw1.value.length < 8){
            alert("비밀번호는 8자리 이상입니다");
            pw1.select();
        }
    }

    function comparePw(){
        if(pw1.value != pw2.value){
            alert("비밀번호가 일치하지 않습니다.");
            pw2.value = "";
            pw2.focus();
        }
    }
}
