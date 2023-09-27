// console.log("starting test server");
// console.dir(document);
// console.log(document.title);
// console.log(document.forms);
// console.log(document.links);
//console.log(document.getElementById('header-title'));
var header=document.getElementById('header-title');
console.log(header)
header.textContent='hello';
header.innerText='1234';
header.style.borderBottom='solid 3px #000'
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='hello2';
for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor='green';
}