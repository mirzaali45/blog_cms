const base_url = process.env.CONTENTFUL_BASE_URL;
const space_id = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_ACCESS_TOKEN;

import resolveResponse from "contentful-resolve-response";

export const getBlogs = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  // const response = {
  //     items: data.items,
  //     includes: data.includes,
  // }
  const result = resolveResponse(data);

  return result;
};
export const getBlogsSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  // const response = {
  //     items: data.items,
  //     includes: data.includes,
  // }
  const result = resolveResponse(data);

  return result[0];
};
export const getBlogsSlugRecom = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug[ne]=${slug}&limit=3`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result;
};
