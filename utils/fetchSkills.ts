import { sanityClient } from "../sanity";
import { Skill } from "../typings";

export const fetchSkills = async () => {
  const query = `*[_type == "skill"]`;
  const skills: Skill[] = await sanityClient.fetch(query);
  return skills;
};
