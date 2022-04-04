const myform = document.querySelector('#my-form');
const expense = document.querySelector('#expense');
const desc = document.querySelector('#desc');
const catagory = document.querySelector('#catagory');
var list = document.getElementById('my-list');

list.addEventListener('click', removeItem);

const key = Object.keys(localStorage);
let i = key.length;
while (i--) {

    let expense = JSON.parse(localStorage.getItem(key[i]));
    // console.log(key[i]);
    const li = `<li id=${key[i]} class="list-group-item"> <span>${expense.expense}</span>--<span>${expense.desc}</span>--<span>${expense.catagory}</span>
    <button class="btn btn-danger btn-sm m-1 delete">delete</button>
    <button class="btn btn-warning btn-sm m-1 edit">edit</button></li>`
    list.innerHTML = list.innerHTML + li;
    // list.appendChild(li);
}


myform.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if (expense.value === '' || desc.value === '' || catagory === '') {
        alert("Enter all the value");
    }
    else {

        let newExpense = {
            expense: expense.value,
            desc: desc.value,
            catagory: catagory.value
        }
        localStorage.setItem(`item${localStorage.length}`, JSON.stringify(newExpense));
        const id = `item${localStorage.length}`
        const li2 = `<li id=${id} class="list-group-item"> <span>${newExpense.expense}</span>--<span>${newExpense.desc}</span>--<span>${newExpense.catagory}</span>
                    <button class="btn btn-danger btn-sm m-1 delete">delete</button>
                    <button class="btn btn-warning btn-sm m-1 edit">edit</button></li>`
        list.innerHTML = list.innerHTML + li2;

        // clear field
        expense.value = "";
        desc.value = "";
        catagory.value = "";
    }
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        var x = li.id;
        console.log(x);
        localStorage.removeItem(x);
        list.removeChild(li);
    }

    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        console.log(li);
        var exp = li.childNodes[1].textContent;
        var des = li.childNodes[3].textContent;
        var cat = li.childNodes[5].textContent;
        console.log(exp);
        expense.value = exp;
        desc.value = des;
        catagory.value = cat;
        list.removeChild(li);
    }
}