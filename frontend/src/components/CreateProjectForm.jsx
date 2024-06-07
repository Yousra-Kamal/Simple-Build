/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { CREATE_PROJECT } from "../utils/mutations";
import { QUERY_PROJECTS } from "../utils/queries";
import { Link } from "react-router-dom";

export default function CreateProjectForm() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    description: "",
    status: "",
    projectCode: "",
    startDate: "",
    endDate: "",
  });

  const [createProject, { error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: QUERY_PROJECTS }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    navigate("/projects");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className=" px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#cdcaf0] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create a new project
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill out the form below to get started.
          </p>
        </div>
        {/*Create Project Form  */}
        <form
          onSubmit={handleFormSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Project name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="projectCode"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Project code
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="projectCode"
                  id="projectCode"
                  onChange={handleChange}
                  value={formState.projectCode}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* "description" */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  onChange={handleChange}
                  value={formState.description}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Date */}
            <div className="sm:col-span-2">
              <label
                htmlFor="date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date
              </label>
              {/*   eslint-disable-next-line react/no-unknown-property */}
              <div className="flex flex-col md:flex-row items-center mt-2.5 space-y-2.5 md:space-y-0 md:space-x-4">
                {/* StartDate */}
                <div>
                  <input
                    name="startDate"
                    type="date"
                    value={formState.startDate}
                    required
                    onChange={handleChange}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-16 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                {/* EndDate */}
                <div>
                  <input
                    name="endDate"
                    type="date"
                    onChange={handleChange}
                    value={formState.endDate}
                    required
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-16 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>
            </div>
            {/* status */}
            <div className="sm:col-span-2">
              <label
                htmlFor="status"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2.5">
                <select
                  id="status"
                  name="status"
                  autoComplete="status"
                  onChange={handleChange}
                  value={formState.status}
                  required
                  className="block w-full rounded-md border-0 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select Status</option>
                  <option value="Sales">Sales</option>
                  <option value="Presales">Presales</option>
                  <option value="Construction">Construction</option>
                  <option value="Warranty">Warranty</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create project
            </button>
            <Link
              to="/projects"
              className="text-blue-600 text-sm font-semibold flex items-center mt-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 transform rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 10l-4.147-4.146a.5.5 0 0 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L14.707 10zM4.5 10a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5z"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
