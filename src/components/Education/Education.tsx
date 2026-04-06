'use client';

import * as React from 'react';
import EducationForm from '@/components/Education/EducationForm';

export default function Education() {
    const [edit, setEdit] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    type EducationItem = {
        id: number,
        school: string, 
        degree: string, 
        major: string, 
        concentration: string, 
        startYear: number, 
        endYear: number, 
        description: string
    }
    const [education, setEducation] = React.useState<EducationItem[]>([]);

    React.useEffect(() => {
        fetch('/api/education')
            .then(res => res.json())
            .then(data => {
                if (data.content) 
                    setEducation(data.content);
            });

        fetch('/api/me')
            .then(res => res.json())
            .then(data => {
                setIsLoggedIn(data.isLoggedIn);
            });
    }, []);

    const handleSave = async (newText: EducationItem[]) : Promise<void> => {
        const res = await fetch('api/education', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: newText }),
        });

        const data = await res.json();
        console.log('API response:', data);

        if (!res.ok) {
            throw new Error('Failed to save education');
        }
        setEducation(newText);
    };

    return (
        <section className = "rounded-3xl bg-white p-6 shadow">
            <div className = "mb-4 flex w-full items-center justify-between">
                <h2 className = "text-xl font-bold text-neutral-700">
                    :: education
                </h2>

            {isLoggedIn && (
                <button
                    onClick = {() => setEdit(true)}
                    className = "h-10 rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100"
                >
                    Edit
                </button>
            )}
            </div>

            <p className = "text-sm text-neutral-600"> {education} </p>

            <EducationForm
                open = {edit}
                onClose = {() => setEdit(false)}
                onSave = {handleSave}
                title = ":: edit education"
                initialValue = {education}
            />
        </section>
    )
}