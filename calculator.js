let output=document.getElementById("text");
function display(number)
{
    output.value+=number;
}
function Clear(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}
function Calculate(){
    try{
    output.value=eval(output.value);
    }
    catch(err){
        alert("Entered is invalid")
    }

}