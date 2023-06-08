import { getAchievements, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const achievements = await getAchievements();

  return (
    <>
      <h1 className="text-6xl font-bold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r  from-red-500 via-green-300 to-yellow-200 text-transparent bg-clip-text">
          Harish !
        </span>
      </h1>
      <p className="text-2xl text-gray-400">
        A tech enthusiast who interested for learning on Javascript related
        technologies and blockchain.
      </p>
      <h2 className="text-3xl text-gray-400 mt-20 font-bold">My projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-700 rounded-lg p-1 hover:border-yellow-600 hover:scale-105 transition"
          >
            {project.image && (
              <Image
                className="border border-gray-500 rounded-lg object-cover"
                src={project.image}
                alt={project.name}
                width={700}
                height={300}
              />
            )}
            <div className="font-bold bg-gradient-to-r  from-red-500 via-green-300 to-yellow-200 text-transparent bg-clip-text mt-2">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      <h2 className="text-3xl text-gray-400 mt-20 font-bold">
        Personal achievements
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {achievements.map((achievement) => (
          <div
            key={achievement._id}
            className="border-2 border-gray-700 rounded-lg p-1"
          >
            {achievement.image && (
              <Image
                className="border border-gray-500 rounded-lg object-cover"
                src={achievement.image}
                alt={achievement.title}
                width={1920}
                height={1080}
              />
            )}
            <div className="font-bold bg-gradient-to-r  from-red-500 via-green-300 to-yellow-200 text-transparent bg-clip-text mt-2">
              {achievement.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
