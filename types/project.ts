import { PortableTextBlock } from "sanity";

export type ProjectTypes = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  url: string;
  image: string;
  content: PortableTextBlock[];
};
