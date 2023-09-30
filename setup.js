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

// var titles=document.querySelectorAll('.title');
// titles[0].textContent = 'hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

// var newDiv = document.createElement('div');
// // Add class
// newDiv.className= 'hello';
// // Add id
// newDiv.id = 'hello1';
// // Add attr
// newDiv.setAttribute('title', 'Hello Div');
// // Create text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to div
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv,h1);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
