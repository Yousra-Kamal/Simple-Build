import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SpinnerLoader from "../components/SpinnerLoader";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";

import ProjectPageSidebar from "../components/ProjectPageSidebar";

import ProjectCardBody from "../components/ProjectCardBody";

export default function ProjectPage() {
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      <ProjectPageSidebar />

      <ProjectCardBody project={project} />
    </>
  );
}
