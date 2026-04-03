import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    title: string; 
    organization: string;
    image: string; 
    technologies?: string[];
    date?: string;
    description?: string; 
};

export default function ProjectCard({
    title, 
    organization,
    image,
    technologies,
    date,
    description,
}: ProjectCardProps) {
    return (
        <div className = "rounded-3xl bg-white p-5 shadow hover:shadow-md transition">

        {/* Clickable Image */}
            <div className = "relative h-48 w-full overflow-hidden rounded-2xl">
                <Image
                    src = {image}
                    alt = {title}
                    fill
                    className = "object-cover transition duration-300 hover:scale-105"
                />
            </div>

            {/* Project Title */}
            <h3 className = "mt-4 text-lg font-semibold text-neutral-800">
                {title}
            </h3>

            {/* Project Organization */}
            <p className = "text-md text-neutral-600">
                {organization}
            </p>

            {/* Project Technologies */}
            {technologies && technologies.length > 0 && (
                <div className = "mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className = "rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            {/* Project Date */}
            {date && (
                <p className = "mt-2 text-sm text-neutral-600">
                    {date}
                </p>
            )}

            {/* Project Description */}
            {description && (
                <p className = "mt-2 text-sm text-neutral-600">
                    {description}
                </p>
            )}
        </div>
    );
}