import { createClient, groq } from "next-sanity";
import { ProjectTypes } from "@/types/project";
import clientConfig from "./config/client-config";
import { PageTypes } from "@/types/page";
import { AchievementTypes } from "@/types/achievement";

export async function getProjects(): Promise<ProjectTypes[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content
    }`
  );
}

export async function getProject(slug: string): Promise<ProjectTypes> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<PageTypes[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug":slug.current,
    content
    }`
  );
}
export async function getPage(slug: string): Promise<PageTypes> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug":slug.current,
    content
    }`,
    { slug }
  );
}

export async function getAchievements(): Promise<AchievementTypes[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "achievement"]{
    _id,
    _createdAt,
    title,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    }`
  );
}
