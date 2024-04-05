import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskListState } from "@/types/reducer.types"
import TaskListModel from "../models/TaskList.model"

const initialState: TaskListState = {
   taskLists: [],
}

const tasksListSlice = createSlice({
   name: "taskListReducer",
   initialState,
   reducers: {
      setTaskList(state, action: PayloadAction<TaskListState>) {
         state.taskLists = action.payload.taskLists
      },
      addNewTask(state, action: PayloadAction<TaskListModel>) {
         state.taskLists.push(action.payload)
      },
      deleteList(state, action: PayloadAction<string>) {
         state.taskLists = state.taskLists.filter(
            (task) => task.task_list_id !== action.payload
         )
      },
      renameTaskList(
         state,
         action: PayloadAction<{ task_list_id: string; task_list_name: string }>
      ) {
         const task = state.taskLists.find(
            (task) => task.task_list_id === action.payload.task_list_id
         )
         if (task) {
            task.task_list_name = action.payload.task_list_name
         }
      },
   },
})

export const { setTaskList, addNewTask, deleteList, renameTaskList } =
   tasksListSlice.actions

export default tasksListSlice.reducer
