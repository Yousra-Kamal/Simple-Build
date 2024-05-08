import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_TASK } from "../utils/mutations";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddTaskForm() {
  const [addTask, { error }] = useMutation(ADD_TASK);
  const [taskFormData, setTaskFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskStage: "",
    taskStatus: "",
  });

  const { projectId } = useParams();

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData({ ...taskFormData, [name]: value });
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addTask({
        variables: {
          projectId: projectId,
          ...taskFormData,
        },
      });

      console.log("Task added:", data);
      setTaskFormData({
        taskTitle: "",
        taskDescription: "",
        taskStage: "",
        taskStatus: "",
      });
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  return (
    <Popover className="relative isolate z-50 shadow">
      <div className="py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Add a task <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-4 pb-12 lg:px-8">
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleTaskSubmit}>
                {/* title */}
                <div>
                  <label
                    htmlFor=" taskTitle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Task Tilte
                  </label>
                  <div className="mt-2">
                    <input
                      id="taskTitle"
                      name="taskTitle"
                      type="text"
                      value={taskFormData.taskTitle}
                      onChange={handleTaskChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* description */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="taskDescription"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="taskDescription"
                      name="taskDescription"
                      type="text"
                      value={taskFormData.taskDescription}
                      onChange={handleTaskChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* stage */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="taskStage"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Stage
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      id="taskStage"
                      name="taskStage"
                      onChange={handleTaskChange}
                      required
                      value={taskFormData.taskStage}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select a stage</option>
                      <option value="Setup">Setup</option>
                      <option value="Slab">Slab</option>
                      <option value="Frame">Frame</option>
                      <option value="Lockup">Lockup</option>
                      <option value="Fit Ou">Fit Out</option>
                      <option value="Handover">Handover</option>
                    </select>
                  </div>
                </div>
                {/* Status */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="taskStatus"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Stage
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      id="taskStatus"
                      name="taskStatus"
                      onChange={handleTaskChange}
                      required
                      value={taskFormData.taskStatus}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select a status</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="On Hold">On Hold</option>
                      <option value="Delayed">Delayed</option>
                    </select>
                  </div>
                </div>

                {/*  add task button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
