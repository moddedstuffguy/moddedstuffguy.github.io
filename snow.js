// Code isn't from moddedstuffguy
// I've found this script with some coffee and some googling
// I've changed snowflake's color to black cause my web is white theme only
var marginBottom,marginRight,snowMax=150,snowColor=["#000000","#000000"],snowEntity="•",snowSpeed=.6,snowMinSize=27,snowMaxSize=42,snowRefresh=40,snowStyles="cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;",snow=[],pos=[],coords=[],lefr=[];function randomise(o){return rand=Math.floor(o*Math.random()),rand}function initSnow(){var o=snowMaxSize-snowMinSize;for(marginBottom=document.body.scrollHeight-5,marginRight=document.body.clientWidth-15,i=0;i<=snowMax;i++)coords[i]=0,lefr[i]=15*Math.random(),pos[i]=.03+Math.random()/10,snow[i]=document.getElementById("flake"+i),snow[i].style.fontFamily="inherit",snow[i].size=randomise(o)+snowMinSize,snow[i].style.fontSize=snow[i].size+"px",snow[i].style.color=snowColor[randomise(snowColor.length)],snow[i].style.zIndex=1e3,snow[i].sink=snowSpeed*snow[i].size/5,snow[i].posX=randomise(marginRight-snow[i].size),snow[i].posY=randomise(2*marginBottom-marginBottom-2*snow[i].size),snow[i].style.left=snow[i].posX+"px",snow[i].style.top=snow[i].posY+"px";moveSnow()}function resize(){marginBottom=document.body.scrollHeight-5,marginRight=document.body.clientWidth-15}function moveSnow(){for(i=0;i<=snowMax;i++)coords[i]+=pos[i],snow[i].posY+=snow[i].sink,snow[i].style.left=snow[i].posX+lefr[i]*Math.sin(coords[i])+"px",snow[i].style.top=snow[i].posY+"px",(snow[i].posY>=marginBottom-2*snow[i].size||parseInt(snow[i].style.left)>marginRight-3*lefr[i])&&(snow[i].posX=randomise(marginRight-snow[i].size),snow[i].posY=0);setTimeout("moveSnow()",snowRefresh)}for(i=0;i<=snowMax;i++)document.write(""+snowEntity+"");window.addEventListener("resize",resize),window.addEventListener("load",initSnow);
