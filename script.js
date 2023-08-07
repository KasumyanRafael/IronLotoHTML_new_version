var button=document.querySelector("#play");
button.addEventListener("click",function(){
    let firstname=document.querySelector("#firstbox").value;
    let secondname=document.querySelector("#secondbox").value;
    let firstgamer=document.querySelector("#firstgamername");
    let secondgamer=document.querySelector("#secondgamername");
    if(firstname!=" ")
    {
        firstgamer.value=firstname;
    }
    else{
        firstgamer.value="Первый игрок";
    }
    if(secondname!=" ")
    {
        secondgamer.value=secondname;
    }
    else{
        secondgamer.value="Второй игрок";
    }
    let loto=document.querySelector(".main-loto");
    let premain=document.querySelector(".main-prev");
    premain.style.display='none';
    loto.style.display='block';
    alert("Hello!");
})