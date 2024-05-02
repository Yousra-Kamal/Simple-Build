const projects = [
  {
    id: "M151",
    name: "Shalvy",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: "09/02/2025",
    status: "Construction",
  },
  {
    id: "PR-012",
    name: "Granny Flat",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: "09/02/2024",
    status: "Completed",
  },
  {
    id: "M148",
    name: "Riverwood",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: " ",
    status: "Construction",
  },
  {
    id: "M151",
    name: "Shalvy",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: "09/02/2025",
    status: "Construction",
  },
  {
    id: "PR-012",
    name: "Granny Flat",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: " ",
    status: "Completed",
  },
  {
    id: "M148",
    name: "Riverwood",
    description: "Passive House",
    startDate: "09/02/2024",
    endDate: "09/02/2024",
    status: "Construction",
  },

  // More projects...
];

export default function ProjectsList() {
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
            <button
              type="button"
              className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create a Project
            </button>
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
                  {/*   <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Description
                    </th> */}
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
                    <tr key={project.id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm  sm:pl-0">
                        <a
                          href="#"
                          className="text-blue-600 font-semibold underline hover:text-blue-900"
                        >
                          {project.id}
                        </a>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        🏚 {project.name}
                      </td>
                     {/*  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.description}
                      </td> */}
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
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-400"
                        >
                          Edit<span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-red-600 hover:text-red-400">
                          Delete
                          <span className="sr-only">, {project.name}</span>
                        </a>
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
