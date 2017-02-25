appTodo.controller("todoListController",function($scope,localStorageService,listTaskService){
  $scope.sortTasks= listTaskService.sortTasksService();
  $scope.filterPriorityItem = listTaskService.sortPriorityService();
  $scope.filterStatusItem= listTaskService.filterStatusItemService();
  var tasksFile = localStorageService.get("listOfTasks");
  if(tasksFile){
    $scope.listTasks = tasksFile;
  }else{
    $scope.listTasks= [];
  };
  $scope.$watchCollection('listTasks',function(newValue,oldValue){
      localStorageService.set("listOfTasks",$scope.listTasks);
    });
  $scope.getTotal = function(){
    return $scope.listTasks.length;
  }
  $scope.styleNg ={
    daltonico:false,
    done : false
  }
  
  $scope.clearCompleted = function(){
    var x = $scope.listTasks;
    $scope.listTasks = [];
    angular.forEach(x, function(activity){
      if(!activity.done) $scope.listTasks.push(activity);
    });
  }

  $scope.remove = function(activity){
    var txt;
    var r = confirm("Do you want to delete this element?");
    if (r == true) {
      $scope.listTasks.splice($scope.listTasks.indexOf(activity), 1)
      txt = "Deleted";
    } else {
      txt = "Canceled";
    }
  }
  $scope.clearAll = function(){
    var txt;
    var r = confirm("Do you want to clear all?");
    if (r == true) {
      $scope.listTasks= [];
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
  }
//  $scope.listPriority= 'medium';
//  $scope.listTasks =[];
});
