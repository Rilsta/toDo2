/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.listTasksByType = function (taskType, taskCollection) {
        var types = [];
        for (var _i = 0, taskType_1 = taskType; _i < taskType_1.length; _i++) {
            var type = taskType_1[_i];
            if ((taskType === "HomeTask") && (type instanceof ToDoList.HomeTask)) {
                types.push(task.description);
            }
            if ((taskType === "WorkTask") && (type instanceof ToDoList.WorkTask)) {
                types.push(task.description);
            }
            if ((taskType === "HobbyTask") && (type instanceof ToDoList.HobbyTask)) {
                types.push(task.description);
            }
        }
        return types;
    };
})(ToDoList || (ToDoList = {}));
//# sourceMappingURL=to-do-listing-functions.js.map