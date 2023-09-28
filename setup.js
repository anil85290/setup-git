// console.log("starting test server");
// console.dir(document);
// console.log(document.title);
// console.log(document.forms);
// console.log(document.links);
//console.log(document.getElementById('header-title'));
// var header=document.getElementById('header-title');
// console.log(header)
// header.textContent='hello';
// header.innerText='1234';
// header.style.borderBottom='solid 3px #000'
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='hello2';
// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor='green';
// }
// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';
// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='coral';

var titles=document.querySelectorAll('.title');
titles[0].textContent = 'hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}