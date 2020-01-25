const textBox = document.getElementById('textBox');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');


function addItem(){
    const value = textBox.value;
    if(!value.length){
        alert('Enter Something');
        return;
    }
    const myobj = { id:Date.now(),name:value,status:'pending'};
    todolist.push(myobj);
    render();
    textBox.value='';
}








function createItem({
    id,
    name,
    status
}) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = name;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    const statusBtn = document.createElement('button');
    statusBtn.innerText = status;
    div.append(span, deleteBtn, statusBtn);
    li.appendChild(div);
    return li;
}

function render() {
    list.innerHTML = '';
    for (const item of todolist) {
        const listItem = createItem(item);
        list.appendChild(listItem);
    }
}


window.onload = () => {
    render()
}

let todolist = [{
    id: 1,
    name: 'milk',
    status: 'pending'
}, {
    id: 2,
    name: 'chakka',
    status: 'pending'
}, {
    id: 3,
    name: 'salt',
    status: 'pending'
}, {
    id: 4,
    name: 'chicken',
    status: 'pending'
}];