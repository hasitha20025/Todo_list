
let todo_list = [];


show_todo_list_html();

function add_todo(){
     
   let input_name = document.getElementById("todo-list-id");
   let name = input_name.value;
   console.log(name);
   if(name){
     todo_list.push(name);
   }
   console.log(todo_list);   
   show_todo_list_html();
}

function show_todo_list_html() {
    
   let show_html = "";

    for (let i = 0 ; i<todo_list.length; i++){
        let show = todo_list[i];
        //console.log(todo_list[i]);

        let add_html = `<p>${show}</p> <button onclick ="Delete_fun();">Delete</button>`;
        show_html += add_html;

        //console.log(show_html);   
    }
    console.log(show_html); 
    
    document.getElementById("show_todo_list").innerHTML = show_html; 
}


function Delete_fun(i) {
 
  todo_list.splice(i,1); 
  show_todo_list_html();
}
