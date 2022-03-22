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

document.getElementById('addItem').style.color = "red"