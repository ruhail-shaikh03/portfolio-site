

// import { Experience } from "../typings";

// export const fetchExperiences = async() => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     // console.log('fetching', experiences);

//     return experiences;
// }
import { sanityClient } from "../sanity";
import { Experience } from "../typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const query = `
    *[_type == "experience"] | order(dateStarted desc) {
      ...,
      technologies[]->
    }
  `;
  const experiences: Experience[] = await sanityClient.fetch(query);
  return experiences;
};
