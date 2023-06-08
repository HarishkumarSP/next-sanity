import { PortableTextBlock } from "sanity";

export type PageTypes = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
