//---------------- 아이템 리스트 ----------------
let itemList = [];

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

//---------------- 아이템 추가 함수 ----------------
//---------------- addList 시작 ----------------
function addList(){
    //item은 itemList에 push()로 저장(입력)
    let item = document.getElementById("item").value;  //지울 수 있어야하니까 초기화 되게 만들어 볼게요
    itemList.push(item);
    document.getElementById("item").value = "";     //기존 아이템
    document.getElementById("item").focus();        //커서의 위치
    
    //저장된걸 꺼내볼 수 있어야겠죠
    //showList 호출 해놨죠 호출했으면 써야죠
    showList();
}//---------------- addList 닫기 ----------------
//---------------- showList 시작----------------
function showList(){
        //document.getElementById("itemList").innerHTML = itemList[0];
        //목록 리스트 변수 <ul>여기서 열었으니까 밑에서 닫아줘야겠죠
        let list = "<ul>";
        for(let i =0; i<itemList.length; i++){
            //아이템 배열 출력
            //document.getElementById("itemList").innerHTML = itemList[i];                //반복문으로 들어가는지 확인해 볼게요
            list += "<li>"+ itemList[i] +"<span class='close' id=" + i + ">X</span></li>" //삭제할 순번 | 'x'를 선택
        }
        list += "</ul>"
        //</ul> 밑에서 닫아줘야겠죠
        document.getElementById("itemList").innerHTML = list;

        //아이템 삭제
        //'x'를 선택
        let removeList = document.querySelectorAll(".close");

        //'X'를 클릭했을 때 삭제 이벤트가 발생함
        for(i=0; i<removeList.length; i++){
            removeList[i].addEventListener("click", remove);
        }
        
        function remove(){
            console.log(this);                  //클릭 이벤트가 일어난 대상 -  this는 클릭이 되는 대상
            let id = this.getAttribute("id");   //id 값 가져옴
            itemList.splice(id, 1);             //해당 위치에서 1개 삭제 (인덱스, 삭제할 개수)

            //목록 보기
            showList();
        }//remove 닫기

}//---------------- showList 닫기 ----------------