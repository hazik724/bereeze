import { groq } from "next-sanity";

export const jobsQuery = groq`
  *[_type == "job"] | order(postedAt desc) {
    _id,
    title,
    slug,
    company,
    country,
    salary,
    image,
    postedAt
  }
`;