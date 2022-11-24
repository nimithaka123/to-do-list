let l = document.getElementsByTagName("li");
let i; 
for(i=0;i<l.length;i++){
    let span = document.createElement("span")
    let text = document.createTextNode("\u00D7")
    span.className = "name"
    span.appendChild(text)
    l[i].appendChild(span)
}

let v = document.getElementsByClassName("name");
let j;
for(j=0; j<v.length; j++)
{
    v[j].onclick = function(){
        let d = this.parentElement
        d.style.display="none"
    }
}
let tick = document.querySelector("ul")
tick.addEventListener("click",function(ev){
    console.log("wowwwwwwwwwwwwwww");
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("line")
    }
},false) 

function add(){
    console.log("gfdftrg");
    let lis = document.createElement("li")
    let a = document.getElementById("new-task-input").value
    let b = document.createTextNode(a)
    lis.appendChild(b)
    if (a === ""){
        alert("please enter a task")
    }
    else{
        document.getElementById("list").appendChild(lis);

        
        
    }
    let span = document.createElement("span")
    let text = document.createTextNode("\u00D7")
    span.className = "name"
    span.appendChild(text);
    lis.appendChild(span);
    console.log("eeeeeeeeee");

   
    for(j=0; j<v.length; j++)
    {
        v[j].onclick = function(){
            let d = this.parentElement
            d.style.display="none"
        }
    }

}