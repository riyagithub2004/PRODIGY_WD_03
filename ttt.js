let count = 1;
function myFun(data){
    if(count<=9){
        if(count%2 == 0){
            document.getElementById(data.id).innerHTML="O"
        }else{
            document.getElementById(data.id).innerHTML="X"
        }
        count++;
        if(win()){
            alert("WINNER : ")
            reset()
        }
    }else{
        alert("MATCH DRAW");
        reset()
    }

}
function win(){
if(check("div1" , "div2" , "div3") || check("div1" , "div4" , "div7") || check("div1" , "div5" , "div9")
    || check("div3" , "div6" , "div9")|| check("div3" , "div5" , "div7")
    || check("div4" , "div5" , "div6")|| check("div7" , "div8" , "div9")
    || check("div2" , "div5" , "div8")){
    return true;
}
}

function check(div1 , div2 , div3){
    if(document.getElementById(div1).innerHTML!="" && document.getElementById(div2).innerHTML!="" && document.getElementById(div3).innerHTML!="" && 
    document.getElementById(div1).innerHTML == document.getElementById(div2).innerHTML &&
    document.getElementById(div2).innerHTML && document.getElementById(div3).innerHTML ){
        return true;
    }
}


function reset(){
    location.reload();
}