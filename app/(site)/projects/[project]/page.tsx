import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-red-500 via-green-400 to-yellow-300 bg-clip-text text-transparent font-extrabold text-5xl drop-shadow">
          {project.name}
        </h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-400 font-bold px-4 py-3 whitespace-nowrap hover:bg-blue-400 hover:text-pink-100 transition"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </a>
      </header>

      {/* Content goes here */}
      <div className="text-lg text-gray-400 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}
      <Image
        className="mt-10 border-2 border-gray-600 rounded-xl"
        alt={project.name}
        src={project.image}
        width={1920}
        height={1080}
      />
    </div>
  );
}
