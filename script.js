var button=document.querySelector("#play");
button.addEventListener("click",function(){
    let firstname=document.querySelector("#firstbox");
    let secondname=document.querySelector("#secondbox");
    let firstgamer=document.querySelector("#firstgamername");
    let secondgamer=document.querySelector("#secondgamername");
    let firstscore=document.querySelector("#firstscore");
    let secondscore=document.querySelector("#secondscore");
    if(firstname.value===""){
        firstgamer.textContent="Первый игрок";
    }
    else{
        firstgamer.textContent=firstname.value;
    }
    if(secondname.value===""){
        secondgamer.textContent="Второй игрок";
    }
    else{
        secondgamer.textContent=secondname.value;
    }
    firstscore.textContent="0";
    secondscore.textContent="0";
    let loto=document.querySelector(".main-loto");
    let premain=document.querySelector(".main-prev");
    premain.style.display='none';
    loto.style.display='block';
    document.querySelector("#defaultmenu").style.display='none';
    document.querySelector("#gamemenu").style.display='block';
})
document.querySelector("#accelerator").addEventListener("click",function(){
    document.querySelector("#accelerator").style.display='none';
    document.querySelector(".loto-info").style.display='block';
})
document.querySelector("#pause").addEventListener("click",function(){
    let pause=document.querySelector("#pause");
    if(pause.textContent==="Пауза"){
        pause.textContent="Продолжить!";
        document.querySelector(".pausebar").style.display='block';
    }
    else{
        pause.textContent="Пауза";
        document.querySelector(".pausebar").style.display='none';
    }
})
document.querySelector('#stayongame').addEventListener("click",function(){
    document.querySelector('.stopgame').style.display='none';
})
document.querySelector('#exitgame').addEventListener("click",function(){
    document.querySelector('.main-loto').style.display='none';
    document.querySelector(".main-prev").style.display='block';
    document.querySelector("#gamemenu").style.display='none';
    document.querySelector("#defaultmenu").style.display='block';
})