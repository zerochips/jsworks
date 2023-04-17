//배열에 알파벳 대문자 저장
//함수는 소문자로 대문자는 객체 new Array()
let alphabet = new Array(26);
let char = 'A';  //아스키코드 한 번 설명했었죠~ 65인지 확인해보겠습니다

//아스키 코드를 찾는 함수 - 객체.charCodeAt()
char = char.charCodeAt(0);  //0번 65번 | 인덱스 1번은 66번 - 구글로 확인 가능
/* console.log(char);          //code - 65(ASCII 아스키코드 - 8bit)

char++;  //char = char + 1 - char 를 하나씩 증가시켜 볼게요
console.log(char);

//문자로 출력해주는 함수 String.fromCharCode(ch) - 여기는 String 객체죠
// 66 이니까 B 죠~
console.log(String.fromCharCode(char)); */

//배열에 저장(입력)
/* 
    alphabet[0] = char 
    alphabet[1] = char+1
    alphabet[2] = char+2  //char 에 인덱스 2가 더해지죠
*/
for(var i=0; i<alphabet.length; i++){
    alphabet[i] = char;
    char++;
    console.log(alphabet[i]);
}

//출력
for(var i=0; i<alphabet.length; i++){
    document.write(alphabet[i] + ", " 
    + String.fromCharCode(alphabet[i]) + "<br>");
}