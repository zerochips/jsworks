//놀이공원 입장료 계산
let age = prompt("나이를 입력하세요", "1");
age = parseInt(age);
let charge; //선언

//if문 처리
if( age < 8 ){
    document.write("미취학 아동입니다<br>");
    charge = 1000;
}
else if(age >= 8 && age < 14){
    document.write("초등학생 입니다<br>");
    charge = 2000;
}else if(age >= 8 && age < 20){
    document.write("중,고등학생 입니다<br>");
    charge = 2500;
}else if( age >= 20 && age < 65){
    document.write("일반시민 입니다<br>");
    charge = 3000;
}else{
    document.write("우대시민 입니다<br>");
    charge = 0;
    document.write("무료로 이용하세요<br>");
}

document.write("입장료는 <span class='access'>" + charge + "원</span> 입니다");