console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML='New Value';

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.margin=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight, 100);
    img.style.marginleft='100px';
};