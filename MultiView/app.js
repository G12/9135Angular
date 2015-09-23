(function(){
    var list1 = [];
    var list2 = [];
    var list3 = [];
    
    var app = angular.module("g12Todo", ['LocalStorageModule']);
    
    app.controller('TodoList', function(localStorageService)
    {
        var todo_list = this;
        todo_list.todos = list1;
        if(localStorageService.isSupported){
            var test = localStorageService.get("todo1");
            if(test)
            {
                todo_list.todos = test;
            }
        }
        
        todo_list.addTodo = function()
        {
            todo_list.todos.push({text:todo_list.todoText});
            if(localStorageService.isSupported){
                localStorageService.set("todo1", todo_list.todos);
            }
            todo_list.todoText = null;
        };
        
        todo_list.removeItem = function(todo_item)
        {
            for(var i=0; i < todo_list.todos.length; i++)
            {
                if(todo_item === todo_list.todos[i])
                {
                    todo_list.todos.splice(i,1);
                    if(localStorageService.isSupported){
                        localStorageService.set("todo1", todo_list.todos);
                    }
                    return;
                }
            }
        };
    });
    
    app.controller('TodoList2', function(localStorageService)
    {
        var todo_list = this;
        todo_list.todos = list2;
        if(localStorageService.isSupported){
            var test = localStorageService.get("todo2");
            if(test)
            {
                todo_list.todos = test;
            }
        }
        
        todo_list.addTodo = function()
        {
            todo_list.todos.push({text:todo_list.todoText});
            if(localStorageService.isSupported){
                localStorageService.set("todo2", todo_list.todos);
            }
            todo_list.todoText = null;
        };
        
        todo_list.removeItem = function(todo_item)
        {
            for(var i=0; i < todo_list.todos.length; i++)
            {
                if(todo_item === todo_list.todos[i])
                {
                    todo_list.todos.splice(i,1);
                    if(localStorageService.isSupported){
                        localStorageService.set("todo2", todo_list.todos);
                    }
                    return;
                }
            }
        };
    });

    app.controller('TodoList3', function(localStorageService)
    {
        var todo_list = this;
        todo_list.todos = list3;
        if(localStorageService.isSupported){
            var test = localStorageService.get("todo3");
            if(test)
            {
                todo_list.todos = test;
            }
        }
        
        todo_list.addTodo = function()
        {
            todo_list.todos.push({text:todo_list.todoText});
            if(localStorageService.isSupported){
                localStorageService.set("todo3", todo_list.todos);
            }
            todo_list.todoText = null;
        };
        
        todo_list.removeItem = function(todo_item)
        {
            for(var i=0; i < todo_list.todos.length; i++)
            {
                if(todo_item === todo_list.todos[i])
                {
                    todo_list.todos.splice(i,1);
                    if(localStorageService.isSupported){
                        localStorageService.set("todo3", todo_list.todos);
                    }
                    return;
                }
            }
        };
    });

    app.controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
                title: 'My TO DOs',
                url: 'one.tpl.html'
            }, {
                title: 'Your TO DOs',
                url: 'two.tpl.html'
            }, {
                title: 'Whos TO DOs',
                url: 'three.tpl.html'
        }];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl === $scope.currentTab;
        };
    }]);

    app.controller('AlertController',function(){
        alert("Hello");
    });
    
})();

