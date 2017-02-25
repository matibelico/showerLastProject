var appTodo = angular.module("todoList",["LocalStorageModule","ngRoute"]);
  appTodo.config(function($routeProvider){
    $routeProvider.when("/",{
      controller: "introductionController",
      templateUrl:"view/introduction.html"
    })
    .when("/addTask/",{
      controller: "addTaskController",
      templateUrl:"view/homePage.html"
    })
    .when("/myTasks/",{
      controller: "todoListController",
       templateUrl:"view/myTasks.html"
    })
    .when("/editTask/:title",{
      controller: "editController",
      templateUrl:"view/editTask.html"
    })
    .otherwise({
      redirectTo: "/"
  });
});
