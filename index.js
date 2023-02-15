let userForm = document.querySelector('.user-form');
let ul = document.getElementById('myUL');
let li = document.createElement('li');
const actionButton = document.getElementById('actionButton');
const deleteButton = document.getElementById('delete-item');
const sorted = document.getElementById("sort-up");
const reversed = document.getElementById("reverse");
let allInputs = document.querySelectorAll('input[type="text"]');

// create input field
function toDo(){
      li = ul.appendChild(document.createElement("li"));
      let newLi = li.appendChild(document.createElement('input'));
      newLi.focus()
      newLi.type = "text";
      newLi.id = "myClass";
      newLi.classList = "myInputs";
      li.className = "myLi";
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.classList="delete-item";
      deleteBtn.innerHTML = "x";
      li.appendChild(deleteBtn);
    }

// add input fields and save value
const submit = userForm.addEventListener("submit", (event)=>{
    event.preventDefault();
           toDo();  
    calculate(); 
}) 

// push values from input fields to array
let arr = new Array();
function calculate() {
    let allInputs = document.querySelectorAll('input[type="text"]');
    let myLength = allInputs.length;
    let input;
    arr = []
for (let i = 0; i < myLength; i++) {
    input = allInputs[i];
    if (input.value != 0 ){
    arr.push(input.value);
}
}
}

// sort array
function sorting(){
    let  myArr = arr;
    let allInputs = document.querySelectorAll('input[type="text"]');
    let input;
    myArr.sort();
    for (let i = 0; i < myArr.length; i++) {
        input = allInputs[i];
        input.value = myArr[i];     
} calculate()
    sorted.style.display = "none";
    reversed.style.display = "block"
    }

//reverse array  
function reversing(){
    let myArr = arr;
    let allInputs = document.querySelectorAll('input[type="text"]');
    let input;
    sorting();
    myArr.reverse();
    for (let i = 0; i < myArr.length; i++) {
        input = allInputs[i];
        input.value = myArr[i];
} calculate();
    sorted.style.display = 'block';
    reversed.style.display = "none";
}
sorted.addEventListener('click', sorting);
reversed.addEventListener('click', reversing);

//delete input field
ul.addEventListener('click', (evt) =>{
    let allInputs = document.querySelectorAll('input[type="text"]');
        if(evt.target.nodeName === "BUTTON"){
            if(allInputs.length <=1){
        document.getElementById("myClass").value = ""
        calculate();
            }else{
        evt.target.closest('li').remove();
        calculate();
    } 
}      
})


