var rows = document.getElementById('input');
var array = [];
function pyramid(rows){
for(i = 0;i <=rows;i++){
    array.push(i);
    let para = document.createElement('P');
    document.body.appendChild(para);
    para.id = i;
}
for(j=0;j<=rows;j++){
    document.getElementById(j).innerText = array;
    array.pop();
}
}
