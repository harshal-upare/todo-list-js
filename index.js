const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
function addTask(text) {
    text = text.trim();
    if(text !== "") {
        let li = document.createElement("li");
        li.textContent = text;
        let bt = document.createElement("button");
        bt.textContent = "X";
        ul.appendChild(li);
        ul.appendChild(bt);
        
        bt.addEventListener("click",function() {
            li.remove();
            bt.remove();
        })
        
        li.addEventListener("click",function() {
            li.classList.toggle("over");
        })

        input.value = ""; 
    }
}

button.addEventListener("click",function() {
  addTask(input.value);  
})
input.addEventListener("keyup",function(event) {
    if(event.key === "Enter"){
        addTask(input.value);  
    }
})