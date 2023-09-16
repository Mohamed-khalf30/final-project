let addToDoButton = document.getElementById('addToDo');
let noteButton = document.getElementById('addnote');
let toDoContainer = document.getElementById('todo');
let noteContainer = document.getElementById('notec');
let inputField = document.getElementById('inputField');
let inputFieldnote = document.getElementById('inpnote');

addToDoButton.addEventListener('click', ()=>{
    var div = document.createElement('div');
    div.setAttribute('class','fin');
    var para = document.createElement('p');
    para.innerHTML=inputField.value.trim();
    div.appendChild(para);
    toDoContainer.append(div);
    div.addEventListener('click',()=>{
        if(div.style.textDecoration=="none"){
            div.style.textDecoration="line-through";
        }else{div.style.textDecoration="none";}
    })
    div.addEventListener('dblclick',()=>{
        div.remove();
    })
})

noteButton.addEventListener('click', ()=>{
    var div = document.createElement('div');
    div.setAttribute('class','fin');
    var para = document.createElement('p');
    para.innerHTML=inputFieldnote.value.trim();
    div.appendChild(para);
    noteContainer.append(div);
    div.addEventListener('dblclick',()=>{
        div.remove();
    })
})


