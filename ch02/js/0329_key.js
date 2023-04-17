//'y' or 'Y' 키를 누르면 "계속 반복합니다"
//'n' or 'N' 키를 누르면 "반복을 중단합니다"
//그 이외의 키는 "키를 잘못 눌렀습니다"

while(true){
    let key = prompt("계속 반복할까요?", 'y/n'); //

    if(key != null && (key == 'y' || key == 'Y')){
        alert("계속 반복합니다");
        // console.log("반복을 중단합니다");
    }
    else if(key != null && (key == 'n' || key == 'N')){
        alert("반복을 중단합니다");
        // console.log("반복을 중단합니다");
        break;
    }
    else{
        alert("키를 잘못 눌렀습니다");
    }
}
document.write("프로그램 종료!!");

/*

object - 가장 큰 자료형(바이트가 크다)
숫자, 문자열, 부울형, null, array(배열) 포함됨

 */