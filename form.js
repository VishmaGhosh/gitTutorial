// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// document.all[6].textContent = "My List";

// console.log(document.getElementById('headerTitle'));
// var headerTitle = document.getElementById('headerTitle');
// headerTitle.textContent = "Hello";
// headerTitle.style.borderBottom = '3px solid #000'

// document.getElementById('addItem').style.color = "red";

// get Element by className

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = "cyan";

// for(var i = 0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
//     items[i].style.color = "red";
// }


// Get element by tag name
// var li = document.getElementsByTagName("li");
// console.log(li);

// for(var i = 0;i<li.length;i++){
//     li[i].style.fontWeight = "bold";
//     li[i].style.color = "red";
// }

// Get element by queryselector
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none";

// Get element by queryselector

// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = "green"

// var odds = document.querySelectorAll('.list-group-item:nth-child(odd)')
// console.log(odds);
// for(var i = 0; i<odds.length;i++){
//     odds[i].style.backgroundColor = "green";
// }

var items = document.querySelector('#items');
// parentElement
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor = "#f5f5f5";
// console.log(items.parentNode.parentNode);

// parent Element

// console.log(items.parentElement);
// items.parentElement.style.backgroundColor = "#f5f5f5";
// console.log(items.parentElement.parentElement);

// child node
// console.log(items.childNodes);

console.log(items.children);

// First Child
console.log(items.firstChild);

// First Element child
console.log(items.firstElementChild);

// Last child 
console.log(items.lastChild);

// Last Element Child
console.log(items.lastElementChild);

// Next Sibling
console.log(items.nextSibling);

// Next Element sibling
console.log(items.nextElementSibling);

// Previous Sibling
console.log(items.previousSibling);

// previous Element sibling
console.log(items.previousElementSibling);
items.previousElementSibling.style.color = "green";

// Create Element

var newDiv = document.createElement('div');
// add class name
newDiv.className = 'hello';
//add attribute
newDiv.setAttribute('title', 'hello div');

// create text node
var newDivText = document.createTextNode('Hello world!')

// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
container.insertBefore(newDiv,h1)

// insert before item 1

var ul = document.querySelector('ul');
console.log(ul);
var item1 = document.querySelector('ul .ulDiv');
ul.insertBefore(newDiv, item1);


