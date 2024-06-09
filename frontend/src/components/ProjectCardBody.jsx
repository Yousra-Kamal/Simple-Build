/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ChartCard from "./ChartCard";
import AddTaskForm from "./AddTaskForm";
import {
  ClipboardDocumentListIcon as TodoIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { PaperClipIcon } from "@heroicons/react/20/solid";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../utils/mutations";

//for comments later
const activity = [
  {
    id: 3,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Alex Curren",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },

  {
    id: 5,
    type: "viewed",
    person: { name: "Alex Curren" },
    date: "2d ago",
    dateTime: "2023-01-24T09:12",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectCardBodye({ project }) {
  /*  const tasks = project.tasks; */
  const [tasks, setTasks] = useState(project.tasks);

  const [deleteTask] = useMutation(DELETE_TASK);

  const handleDeleteTask = async (taskId) => {
    try {
      const { data } = await deleteTask({
        variables: {
          projectId: project._id,
          taskId: taskId,
        },
      });

      // Update the tasks state after deletion
      setTasks(tasks.filter((task) => task._id !== taskId));

      // Handle UI updates or notifications upon successful deletion
    } catch (error) {
      console.error("Error deleting task:", error);
      // Handle error state or show error message to user
    }
  };
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <main>
        <header className="relative isolate py-4">
          <div
            className="absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#ea9ebe] to-[#a5a2d5]"
                style={{
                  clipPath:
                    "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div>

          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <div></div>
                <h1>
                  <div className="text-sm leading-6 text-gray-500">
                    Project ID{" "}
                    <span className="text-gray-700">
                      #{project.projectCode}
                    </span>
                  </div>
                  <div className="mt-1 text-2xl  font-serif font-semibold leading-6 text-gray-900">
                    {project.name}
                  </div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <Link
                  to={`/updateprojectForm/${project._id}`}
                  className="text-sm font-semibold leading-6   flex items-center"
                >
                  Edit
                  <PencilSquareIcon
                    className="w-5 h-5 ml-1 text-blue-600"
                    aria-hidden="true"
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Project summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <ChartCard />
            </div>
            {/* project description */}

            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Description
              </h2>
              <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">
                    {project.description}
                  </dt>
                  <dd className="inline text-gray-700"></dd>
                </div>

                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-900 font-semibold">
                    Status :
                  </dt>
                  <dd className="inline  text-green-600 font-semibold">
                    <div>{project.status}</div>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">Start Date</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900"></span>
                    {project.startDate}
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-gray-900">End Date</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900"></span>
                    {project.endDate}
                  </dd>
                </div>
              </dl>

              {/* Tasks   */}
              <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                {/* Table rows */}
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-0 py-3 font-semibold text-lg text-gray-900 flex items-center"
                    >
                      <span className="mr-1">Tasks</span>{" "}
                      {/* Add a margin to separate the icon from text */}
                      <TodoIcon
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </th>
                    <th
                      scope="col"
                      className=" py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                    >
                      Stage
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-8 pr-0 text-right font-semibold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="font-bold py-3 pl-8 pr-0 text-right text-green-700"
                    ></th>
                  </tr>
                </thead>

                <tbody className="border-b border-gray-200 text-gray-900">
                  {tasks.map((task) => (
                    <tr key={task._id} className="">
                      <td className="max-w-0 px-0 py-5 align-top  border-b border-gray-200">
                        <div className="truncate font-medium text-gray-900">
                          {task.taskTitle}
                        </div>
                        <div className="truncate text-gray-500">
                          {task.taskDescription}
                        </div>
                      </td>

                      <td className=" py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {task.taskStage}
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-green-800">
                        {task.taskStatus}
                      </td>
                      <td className="font-bold text-red-600 py-6 pl-8 pr-0 text-right align-top tabular-nums t">
                        <button onClick={() => handleDeleteTask(task._id)}>
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden"
                    ></th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="  pb-0 pt-6 font-normal text-gray-700 sm:table-cell"
                    >
                      <AddTaskForm onAddTask={handleAddTask} />
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900"></td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-normal text-gray-700 sm:hidden"
                    ></th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                    ></th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-gray-900"></td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-semibold text-gray-900 sm:hidden"
                    ></th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                    ></th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-gray-900"></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3 pl-2 pr-2  ">
              {/* Activity feed */}
              <h2 className=" bg-slate-100 py-2 font-semibold leading-6 text-gray-900">
                Chat
                <span className=" text-lg text-gray-400 pl-40 italic">
                  Coming soon
                </span>
              </h2>
              <ul role="list" className="mt-6 space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === activity.length - 1
                          ? "h-6"
                          : "-bottom-6",
                        "absolute left-0 top-0 flex w-6 justify-center"
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>
                    {activityItem.type === "commented" ? (
                      <>
                        <img
                          src={activityItem.person.imageUrl}
                          alt=""
                          className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                        />
                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 text-xs leading-5 text-gray-500">
                              <span className="font-medium text-gray-900">
                                {activityItem.person.name}
                              </span>{" "}
                              commented
                            </div>
                            <time
                              dateTime={activityItem.dateTime}
                              className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                            >
                              {activityItem.date}
                            </time>
                          </div>
                          <p className="text-sm leading-6 text-gray-500">
                            {activityItem.comment}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                          {activityItem.type === "paid" ? (
                            <CheckCircleIcon
                              className="h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : (
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                          )}
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </span>{" "}
                          {activityItem.type} the invoice.
                        </p>
                        <time
                          dateTime={activityItem.dateTime}
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                        >
                          {activityItem.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="mt-6 flex gap-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows={2}
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                      defaultValue={""}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center"></div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
