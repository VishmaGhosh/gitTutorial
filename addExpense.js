const myform = document.querySelector('#my-form');
const expense = document.querySelector('#expense');
const desc = document.querySelector('#desc');
const catagory = document.querySelector('#catagory');
var list = document.getElementById('my-list');

list.addEventListener('click', removeItem);
window.addEventListener('DOMContentLoaded', showExpenses());

const key = Object.keys(localStorage);
let i = key.length;

async function showExpenses() {
    list.innerHTML = "";
    // axios.get('https://crudcrud.com/api/0443a2abfd2942f6b0bc41c8e3c331a4/expenses')
    //     .then(res => {
    //         res.data.map((expense, key) => {
    //             const li = `<li id=${expense._id} class="list-group-item"> <span>${expense.expense}</span>--<span>${expense.desc}</span>--<span>${expense.catagory}</span>
    // <button class="btn btn-danger btn-sm m-1 delete">delete</button>
    // <button class="btn btn-warning btn-sm m-1 edit">edit</button></li>`
    //             list.innerHTML = list.innerHTML + li;
    //         })
    //     })
    //     .catch(err => console.log(err));
    // console.log(key[i]);


    try {
        let res =  await axios.get('https://crudcrud.com/api/26958c84cae049bab516fb1733600b56/expenses')
        console.log(res.data);
        res.data.map((expense, key) => {
            const li = `<li id=${expense._id} class="list-group-item"> <span>${expense.expense}</span>--<span>${expense.desc}</span>--<span>${expense.catagory}</span>
<button class="btn btn-danger btn-sm m-1 delete">delete</button>
<button class="btn btn-warning btn-sm m-1 edit">edit</button></li>`
            list.innerHTML = list.innerHTML + li;
        })
    } catch (error) {
        console.log("Error");
    }
}




myform.addEventListener('submit', onSubmit)

async function onSubmit(e) {
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
        try {
            let res = await axios.post('https://crudcrud.com/api/26958c84cae049bab516fb1733600b56/expenses', newExpense)
            console.log(res);
            if(res.status === 201){
                console.log("New user is created");
                showExpenses();
            }
        } catch (error) {
            console.log(error);
        }

        // clear field
        expense.value = "";
        desc.value = "";
        catagory.value = "";
    }
}

async function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        var x = li.id;
        console.log(x);
        try {
            let res = await axios.delete(`https://crudcrud.com/api/26958c84cae049bab516fb1733600b56/expenses/${x}`)
                if(res.status === 200)
                    showExpenses();
        } catch (error) {
            console.log(error);
        }
        
    }

    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        let x = li.id;
        var exp = li.childNodes[1].textContent;
        var des = li.childNodes[3].textContent;
        var cat = li.childNodes[5].textContent;
        axios.delete(`https://crudcrud.com/api/26958c84cae049bab516fb1733600b56/expenses/${x}`)
            .then((res) => showExpenses())
            .catch((err) => console.log(err));
        expense.value = exp;
        desc.value = des;
        catagory.value = cat;
    }
}