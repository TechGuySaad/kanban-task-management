import React from "react";

import CrossIcon from "../../assets/icon-cross.svg";

export default function AddTask({ addTask, setAddTask }) {
  function removeAddTask() {
    setAddTask(!addTask);
  }
  return (
    <>
      <div
        className="add-task-container absolute bg-black/60 z-50 w-screen h-screen flex items-center justify-center "
        onClick={removeAddTask}
      >
        <div className="add-task bg-white h-fit w-96 rounded-md flex flex-col p-5 gap-y-6">
          <h1 className="text-lg font-bold">Add New Task</h1>
          <div className="title w-full">
            <p className="text-sm font-bold text-gray-400">Title</p>
            <input
              type="text"
              className="border-gray-100 border-2 rounded-sm w-full"
            />
          </div>
          <div className="description w-full">
            <p className="text-sm font-bold text-gray-400">Description</p>
            <input
              type="text"
              className="border-gray-100 border-2 rounded-sm w-full h-16"
            />
          </div>

          <div className="subtasks  flex flex-col gap-y-2">
            <p className="text-sm font-bold text-gray-400">Subtasks</p>
            <div className="add-subtask flex items-center gap-x-2">
              <input
                type="text"
                className="border-gray-100 border-2 rounded-sm w-full"
              />
              <img src={CrossIcon} alt="" />
            </div>

            <div className="add-subtask flex items-center gap-x-2">
              <input
                type="text"
                className="border-gray-100 border-2 rounded-sm w-full"
              />
              <img src={CrossIcon} alt="" />
            </div>

            <button className="w-full flex h-9 text-indigo-500 text-sm font-bold bg-indigo-50 justify-center items-center rounded-3xl">
              + Add New subtask
            </button>
          </div>
          <div className="status">
            <p className="text-sm text-gray-400 font-bold">Status </p>
            <p>dropdown</p>
            <button className="w-full flex h-9 text-white text-sm font-bold bg-indigo-600/75 justify-center items-center rounded-3xl">
              Create Task
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
