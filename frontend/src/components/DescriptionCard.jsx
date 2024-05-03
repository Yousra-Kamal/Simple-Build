/* eslint-disable react/prop-types */
export default function DescriptionCard({ project }) {
  return (
    <>
      <h2 className=" text-xl pb-4 font-semibold leading-6 text-gray-900">
        Description
      </h2>
      <div className="sm:pr-4">{project.description}</div>
    </>
  );
}
