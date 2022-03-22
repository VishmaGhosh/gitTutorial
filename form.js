console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
document.all[6].textContent = "My List";

console.log(document.getElementById('headerTitle'));
var headerTitle = document.getElementById('headerTitle');
headerTitle.textContent = "Hello";
headerTitle.style.borderBottom = '3px solid #000'

document.getElementById('addItem').style.color = "red";

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

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = "green"

var odds = document.querySelectorAll('.list-group-item:nth-child(odd)')
console.log(odds);
for(var i = 0; i<odds.length;i++){
    odds[i].style.backgroundColor = "green";
}

