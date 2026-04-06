'use client';

import Image from "next/image";
import { useState } from "react";
import * as React from 'react';

type ProjectCardProps = {
    title: string; 
    organization: string;
    image: string; 
    technologies?: string[];
    date?: string;
    description?: string;
    link?: string;
    isLoggedIn: boolean; 
    onSaveDescription: (newDesc: string) => Promise<void>;
};

export default function ProjectCard({
    title, 
    organization,
    image,
    technologies,
    date,
    description,
    link,
    isLoggedIn,
    onSaveDescription,
}: ProjectCardProps) {
    const [open, setOpen] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const [descText, setDescText] = useState(description ?? '');

    React.useEffect(() => {
    fetch(`/api/projects?title=${encodeURIComponent(title)}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
            console.log('project fetch: ', data);
        if (data.description) setDescText(data.description);
        });
    }, [title]);

    const handleSave = async(newDesc: string): Promise<void> => {
        setDescText(newDesc);
        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ projects: newDesc }),
        });

        if (res.ok) {
            throw new Error('Faield to save project text');
        }
    };

    return (
        <>
            <div
                className="rounded-3xl bg-white p-5 shadow hover:shadow-md transition cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-300 hover:scale-105"
                    />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-neutral-800">{title}</h3>
                <p className="text-md text-neutral-600">{organization}</p>

                {technologies && technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {date && <p className="mt-2 text-sm text-neutral-600">{date}</p>}
            </div>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-3xl min-h-[500px] max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-sm text-neutral-400 hover:text-neutral-700"
                        >
                            ✕
                        </button>

                        <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4 bg-neutral-50">
                            <Image src={image} alt={title} fill className="object-contain" />
                        </div>

                        <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
                        <p className="text-sm text-neutral-500 mb-2">{organization}</p>

                        {date && <p className="text-xs text-neutral-400 mb-3">{date}</p>}

                        {technologies && technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {editDescription ? (
                            <div className="mt-3 space-y-2">
                                <textarea
                                    value={descText}
                                    onChange={e => setDescText(e.target.value)}
                                    className="min-h-[120px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
                                />
                                <div className="flex gap-2 justify-end">
                                    <button
                                        onClick={() => setEditDescription(false)}
                                        className="h-9 rounded-md border border-gray-300 px-3 text-sm hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={async () => {
                                            {handleSave}
                                            console.log('saving:', descText);
                                            if (onSaveDescription) await onSaveDescription(descText);
                                            console.log('saved');
                                            setEditDescription(false);
                                        }}
                                        className="h-9 rounded-md bg-neutral-900 px-3 text-sm text-white hover:bg-neutral-800"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-3 flex items-start justify-between gap-2">
                                <p className="text-sm leading-relaxed text-neutral-600">
                                    {descText || 'No description yet.'}
                                </p>
                                {isLoggedIn && (
                                    <button
                                        onClick={() => setEditDescription(true)}
                                        className="shrink-0 h-8 rounded-md border border-gray-300 px-3 text-xs hover:bg-gray-100"
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        )}

                        {link && (
                            <a
                                href={link}
                                className="mt-4 inline-block rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700"
                            >
                                Visit Project →
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}   