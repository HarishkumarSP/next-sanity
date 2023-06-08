import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Pages({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-red-400 via-green-400 to-yellow-300 bg-clip-text text-transparent text-5xl font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-400 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
