//유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.uid;
    let mail = form.email;
    let pw1 = form.pw1;
    let pw2 = form.pw2;

    //let pw_pat1 = /[0-9a-zA-Z]/;   //영문자, 숫자를 걸러내는 겁니다
    //let pw_pat1 = /[0-9a-zA-Z!@#$%^&*_-]+/;   //영문자, 숫자를 걸러내는 겁니다 
    let pw_pat1 = /[0-9]+/;          //숫자   
    let pw_pat2 = /[a-zA-Z]+/;       //영문자 
    let pw_pat3 = /[~!@#$%^&*]+/;    //특수문자
    //let pw_pat1 = /(^[a-zA-Z0-9~!@#$%^&*]+$)/;

    console.log(pw1.value);
    console.log(pw_pat1.test(pw1.value));

    //이제 아이디를 해보겠습니다
    if(id.value.length < 4){
        alert("아이디는 4~15자까지 가능합니다.");
        id.select();
        return false; //밖으로 전송이 안되게 만드는 겁니다. 가입하기에 button으로 막아놨기 때문에 자바스크립트에서 넘어가게 만들어놨음
    }else if(mail.value == ""){
        alert("이메일은 필수 입력항목입니다.");
        mail.focus();
        return false;
    }else if(pw1.value.length < 8 || !pw_pat1.test(pw1.value) || !pw_pat2.test(pw1.value) || !pw_pat3.test(pw1.value)){   //!가 앞에 붙으면 논리 부정 숫자, 영문, 특수문자 모두 들어가야하니 모두 만족하지 않으면 넘어가지 않아야되기 때문에 ! 논리부정을 넣어야 맞음
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자 이상가능합니다.");  //의도한건 다 들어가야 다음으로 넘어감
        pw1.select();
        console.log(pw1.value);
        return false;
    }else if(pw1.value != pw2.value){
        alert("비밀번호는 동일해야 합니다.");
        pw2.select();
        return false;
    }else{
        form.submit();
    }
}
/* 
각각 이벤트 함수 생성
id 선택자 사용
id="user-id" -> let id = document.

name속성 사용
name="user-id" let id = document.regForm.user-id //폼이름
*/
