(function(){
    var list = [];
    var app = angular.module("g12Todo", []);
    var todo_list;
    app.controller('TodoList', function()
    {
        todo_list = this;
        todo_list.todos = list;
        
        todo_list.addTodo = function()
        {
            todo_list.todos.push({text:todo_list.todoText});
            todo_list.todoText = null;
        };
        
        todo_list.removeItem = function(todo_item)
        {
            for(var i=0; i < todo_list.todos.length; i++)
            {
                if(todo_item === todo_list.todos[i])
                {
                    todo_list.todos.splice(i,1);
                    return;
                }
            }
        };
    });
})();

