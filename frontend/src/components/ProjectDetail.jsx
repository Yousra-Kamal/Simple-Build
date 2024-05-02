import ProjectSummary from "./ProjectSummary";
export default function ProjectDetail() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-b border-gray-200 pb-5">
          <h3 className=" pt-4 text-base font-semibold leading-6 text-gray-900">
            Granny Flat Parents
          </h3>
          <p className="mt-2 max-w-4xl text-sm text-gray-900">
            Status :{" "}
            <span className=" text-green-600 font-semibold">In Progress</span>
          </p>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            Project ID : <span> PR-012</span>
          </p>
        </div>
      </div>
      <ProjectSummary />
    </div>
  );
}
