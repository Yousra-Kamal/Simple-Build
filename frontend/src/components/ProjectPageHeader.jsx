import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProjectPageHeader({ project }) {
  console.log(project);
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-b border-gray-200 pb-5 flex justify-between items-center">
          <div>
            <h3 className="pt-4 text-base font-semibold leading-6 text-gray-900">
              {project.name}
              <Link
                to={`/updateprojectForm/${project._id}`}
                className="pl-4 mb-2"
              >
                🖊
              </Link>
            </h3>

            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Project ID: <span>{project.projectCode}</span>
            </p>
            <p className="mt-2 max-w-4xl text-sm text-gray-900">
              Status:{" "}
              <span className="text-green-600 font-semibold">
                {project.status}
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="mt-2 max-w-4xl text-sm text-gray-900">
              Start Date{" "}
              <span className="text-gray-400 font-semibold">
                {project.startDate}
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="mt-2 max-w-4xl text-sm text-gray-900">
              End Date{" "}
              <span className="text-gray-400 font-semibold">
                {project.endDate}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
