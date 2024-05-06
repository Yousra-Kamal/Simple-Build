/* eslint-disable react/prop-types */
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../utils/mutations";
import { QUERY_PROJECTS } from "../utils/queries";

import { Link } from "react-router-dom";

export default function ProjectsList({ list }) {
  // Define the deleteProject mutation
  // eslint-disable-next-line no-unused-vars
  const [deleteProject, { error }] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: QUERY_PROJECTS }],
  });
  const handleDeleteProject = async (projectId) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await deleteProject({
        variables: { projectId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const projects = list.projects || [];
  console.log("list", projects);

  // If there are no projects, display a message prompting the user to create a project
  if (!projects.length) {
    return (
      <>
        <div className="mx-auto flex justify-center mt-40 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className=" font-serif font-extrabold text-2xl drop-shadow-xl text-blue-800 tracking-tight">
            No Projects Yet
          </h1>

          <div className="ml-6">
            <Link
              to="/projectForm"
              type="button"
              className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create a Project
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
      <div className="pt-4 bg-white px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Projects
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              to="/projectForm"
              type="button"
              className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create a Project
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Project ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm  sm:pl-0">
                        <Link
                          to={`/projectPage/${project._id}`}
                          className="text-blue-600 font-semibold underline hover:text-blue-900"
                        >
                          {project.projectCode}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        🏚 {project.name}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.startDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.endDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.status}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <Link
                          to={`/updateprojectForm/${project._id}`}
                          className="text-blue-600 hover:text-blue-400"
                        >
                          Edit<span className="sr-only">, {project._id}</span>
                        </Link>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <button
                          className="text-red-600 hover:text-red-400"
                          onClick={() => handleDeleteProject(project._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
