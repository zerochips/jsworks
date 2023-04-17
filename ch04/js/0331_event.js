/* function clickOne(){
    if(){

    }
}
 */
function showText(){
    let text = document.getElementById("detail");
    text.style.display = "block";

    let btn = document.getElementById("show");
    btn.style.display = "none";    
}

function hideText(){    
    document.getElementById("detail").style.display = "none";
    document.getElementById("show").style.display = "block";
}