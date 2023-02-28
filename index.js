var h=document.getElementById("First");
var m=document.getElementById("minute");
var s=document.getElementById("seconds");

function Clock(){
    let hour=new Date().getHours();
    let mins=new Date().getMinutes();
    let secs=new Date().getSeconds();

    if(hour<10){
        hour="0"+hour;
    }

    if(mins<10){
        mins="0"+mins;
    }

    if(secs<10){
        secs="0"+secs;
    }

    h.innerText=hour;
    m.innerText=mins;
    s.innerText=secs;
    
    setTimeout(()=>{
        Clock();

    },1000)
}

Clock();