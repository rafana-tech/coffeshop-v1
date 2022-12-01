import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == "service"]
`;

export default async function handler(req, res) {
  const pageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
