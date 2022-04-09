function add-item{
    var input = document.getElementById('new-item');
    var newitem = input.ariaValueMax;
    todoList.push(newitem);
    render();
    input.value = '';

}
function render(){
    var htmlist = document.getElementById('todo-list');
    var content = todoList.map(function(item){
        return '<li>' + item + '</li>'
    });
}
