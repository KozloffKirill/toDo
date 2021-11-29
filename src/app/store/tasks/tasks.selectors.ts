import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskType } from "../../models/tasks";
import * as tasksReducer from "./tasks.reducer"

const selectState = createFeatureSelector<tasksReducer.ITasksState>(
   tasksReducer.tasksFeatureKey
);

export const selectTasks = createSelector(
   selectState,
   (state: tasksReducer.ITasksState) => state.tasks
);

export const selectTypeTasks = (type: TaskType) =>
   createSelector(
      selectState,
      (state: tasksReducer.ITasksState) => state.tasks.filter((task) => task.status == type)
   );