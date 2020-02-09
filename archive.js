var objString=localStorage.getItem("obj");
var obj=JSON.parse(objString);

var string = localStorage.getItem("uniqueString");
    var storage = JSON.parse(string);



for(var i=0;i<storage.length;i++){
document.getElementById('archivecontent').innerHTML += `<div class="logbox" id="${i}" onclick="popup(this.id)">
<div class="title">${obj[i].title}</div>
<div class="time">
    <div class="last-view"><p>last viewed:</p></div>
    <div class="date">${obj[i].date}</div>
    <div class="timestamp">${obj[i].time}</div>
</div>
</div>`;}

function popup(getid){

    document.getElementById('imageshow').innerHTML=`<img src="${obj[getid].image}">`;
    document.getElementById('imageshow').style.display="block";
}
function dissappear(){
    document.getElementById('imageshow').style.display="none";
}

