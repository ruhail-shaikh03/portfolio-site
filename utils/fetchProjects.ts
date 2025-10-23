import { sanityClient } from "../sanity";
import { Project } from "../typings";

export const fetchProjects = async () => {
  const query = `*[_type == "project"] | order(_createdAt desc)`;
  const projects: Project[] = await sanityClient.fetch(query);
  return projects;
};
