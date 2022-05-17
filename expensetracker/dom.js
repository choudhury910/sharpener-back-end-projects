let addexp=document.getElementById('btn');
let ul=document.getElementById('items');
console.log(addexp);
addexp.addEventListener('click',additems);
function additems(e){
    let expense=document.getElementById('nos').value;
    let desc=document.getElementById('desc').value;
    let category=document.getElementById('cat').value;
    console.log(expense,desc,category);
    let obj ={
          expense:expense,
          description:desc,
          cat:category

    }
    console.log(obj);
addNewElement(obj);
    let obj_str=JSON.stringify(obj);
    console.log(obj);

    localStorage.setItem(`User${desc}`,obj_str);



}

function addNewElement(object){
  const ul = document.getElementById("items");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.expense + "- " + object.description + "- " + object.cat));
  
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("nos").value = object.expense;
    document.getElementById("desc").value = object.description;
    document.getElementById("cat").value = object.cat;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("user" + object.desc);
    // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
}


    

   
