import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SpinnerLoader from "../components/SpinnerLoader";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";

import ProjectPageHeader from "../components/ProjectPageHeader";
import ProjectPageSidebar from "../components/ProjectPageSidebar";
import ChartCard from "../components/ChartCard";
import DescriptionCard from "../components/DescriptionCard";
import TaskTable from "../components/TaskTable";

export default function ProjectPage() {
  const { projectId } = useParams();
  console.log(projectId);

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <SpinnerLoader />;
  }

  console.log(project);
  return (
    <>
      <ProjectPageSidebar />
      <div className="bg-white">
        {/* Project header */}
        <ProjectPageHeader project={project} />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Financial Chart */}
            <ChartCard />

            {/* Description */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <DescriptionCard project={project} />

              {/* Tasks table */}
              <TaskTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
