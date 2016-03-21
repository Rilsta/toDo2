/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]):
  String[] {
    var descriptions: String[] = [];
    for( var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listTasksByType = function(type: taskType, taskCollection: Task[]):
  String[] {
    var types: String[] = [];
    for( var task of taskCollection){
      if(task.taskType === type) {
        types.push(task.type);
      }
    }
    return types;
  }
}
