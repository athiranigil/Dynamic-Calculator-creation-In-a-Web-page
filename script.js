function clicker(num){
    
    document.getElementById("screen").value+=num

}
function clearScreen(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function onebyone(){
    var val=document.getElementById("screen").value
    val=val.slice(0,-1);
    document.getElementById("screen").value=val;

}