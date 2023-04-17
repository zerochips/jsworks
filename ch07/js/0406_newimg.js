function addContents(){
    let newP = document.createElement("p");  //위에 주석 처리한 위치제 p 태그를 넣을 겁니다. 여기에 p태그를 만들어서
    let text = document.createTextNode("은은하고 다채로운 꽃향");
    newP.appendChild(text); // <p>은은하고 다채로운 꽃향</p>
    // div 태그안에 p캐그 포함
    document.getElementById("info").appendChild(newP);  //인포 아래에 넣는

    //두개가 한 묶음 이구나?? 알아서 이해하자
    let newImg = document.createElement("img");
    let src = document.createAttribute("src");

    //src(소스) 속성
    src.value = "./images/coffee-blue.jpg";
    newImg.setAttributeNode(src);

    //alt속성 - div 태그쪽에 소스하고 이미지가 다 들어간겁니다
    let alt = document.createAttribute("alt");
    alt.value = "커피 이미지";
    newImg.setAttributeNode(alt);

    //div 태그쪽에 소스하고 이미지가 다 들어간겁니다
    //div 태그안에 img 태그 포함
    document.getElementById("info").appendChild(newImg);
}