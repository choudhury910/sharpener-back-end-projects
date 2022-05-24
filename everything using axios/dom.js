let addexp=document.getElementById('btn');
let ShowResult=document.getElementById('btn1')
addexp.addEventListener('click',additems);
ShowResult.addEventListener('click',showitems)


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
    axios.post('https://crudcrud.com/api/83a184a305934265b4a4eb0e50251688/appointment',obj).then(res=>console.log(res.data)).catch(err=>console.log(err))
}

function showitems(e){
axios.get('https://crudcrud.com/api/83a184a305934265b4a4eb0e50251688/appointment').then(res=>console.log(res)).catch(err=>console.log(err))

}