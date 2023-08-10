
let todo_list = []; // task
let todo_list_date =[]; // time

show_todo_list_html();

function add_todo(){
     
   let input_name = document.getElementById("todo-list-id");
   let input_date = document.getElementById("todo-list-date-id");
   let name = input_name.value;
   let date = input_date.value;
  // console.log(name);
  //console.log(date);

   if(name){
     todo_list.push(name);
   }
   console.log(todo_list); 

   if(date){
    todo_list_date.push(date);
  }
   console.log(todo_list_date);  

   show_todo_list_html();
}

function show_todo_list_html() {
    
   let show_html = "";

    for (let i = 0 ; i<todo_list.length; i++){
        let show = todo_list[i];
        let show_date = todo_list_date[i];

        //console.log(todo_list[i]);

        let add_html = `<p> Task: ${ i+1}   Task Name: ${show}  Task Date: ${show_date} </p> <button onclick ="Delete_fun();">Delete</button>`;
        show_html += add_html;

        //console.log(show_html);   
    }
    console.log(show_html); 
    
    document.getElementById("show_todo_list").innerHTML = show_html; 
}


function Delete_fun(i) {
 
  todo_list.splice(i,1);
  todo_list_date.splice(i,1);
  show_todo_list_html();

}
