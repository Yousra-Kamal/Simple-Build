// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import MainNav from "../components/MainNav";
import ProjectsList from "../components/ProjectsList";
import SpinnerLoader from "../components/SpinnerLoader";

import { QUERY_PROJECTS } from "../utils/queries";

export default function AllProjects() {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_PROJECTS);

  const projects = data;
  console.log(loading);
  console.log(projects);
  if (loading) {
    return <SpinnerLoader />;
  }
  return <ProjectsList list={projects} />;

  // return (
  //   <>
  //     <MainNav />
  //     {loading ? <SpinnerLoader /> : <ProjectsList projects={projects} />}
  //   </>
  // );
}
