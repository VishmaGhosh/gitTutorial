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
  var newDesc = document.getElementById('desc').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // create edit button
  var editBtn = document.createElement('button');

  // Add class to edit button
  editBtn.className = 'btn btn-warning btn-sm float-end mx-2';

  // append text to edit button
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append edit button
  li.appendChild(editBtn);

  var desc = document.createElement('p');
  desc.className = 'text-warning';
  desc.appendChild(document.createTextNode(newDesc));
  li.appendChild(desc);

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

// filter items
function filterItems(e){
  // convert to lower text
  var text = e.target.value.toLowerCase();
  // console.log(text);
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach((item)=> {
    var itemName = item.firstChild.textContent;
    var itemDesc = item.children;
    var itemD = itemDesc[2].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else if(itemD.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{item.style.display= 'none'}
  })
}
