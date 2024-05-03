// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import MainNav from "../components/MainNav";
import ProjectsList from "../components/ProjectsList";

import { QUERY_PROJECTS } from "../utils/queries";

export default function HomePage() {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_PROJECTS);

  const projects = data?.projects || [];

  return (
    <>
      <MainNav />
      {loading ? <div>Loading...</div> : <ProjectsList projects={projects} />}
    </>
  );
}
