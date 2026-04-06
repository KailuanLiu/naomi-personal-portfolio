'use client';

import * as React from 'react';
import EducationForm from '@/components/Education/EducationForm';

export type EducationItem = {
  id: number;
  school: string;
  degree: string;
  major: string;
  concentration: string;
  startYear: number;
  endYear: number;
  description: string;
};

type EducationProps = {
  isLoggedIn: boolean;
}

export default function Education({ isLoggedIn }: EducationProps) {
  const [edit, setEdit] = React.useState(false);
  const [education, setEducation] = React.useState<EducationItem[]>([]);

  React.useEffect(() => {
    fetch('/api/education', { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setEducation(data.education ?? []);
      })
      .catch((err) => {
        console.error('Failed to fetch education:', err);
      });
  }, []);

  const handleSave = async (newValue: EducationItem[]): Promise<void> => {
    setEducation(newValue);
    const res = await fetch('/api/education', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ education: newValue }),
    });

    if (!res.ok) throw new Error('Failed to save education');

    const data = await fetch('/api/education', { cache: 'no-store' }).then(r => r.json());
    setEducation(data.education ?? newValue);
    setEdit(false);
  };

  return (
    <section className="rounded-3xl bg-white p-6 shadow">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl font-bold text-neutral-700">:: education</h2>

        {isLoggedIn && (
          <button
            onClick={() => setEdit(true)}
            className="h-10 rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100"
          >
            Edit
          </button>
        )}
      </div>

      <div className="space-y-4">
        {education.length === 0 ? (
          <p className="text-sm text-neutral-500"> loading... </p>
        ) : (
          education.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-neutral-800">{item.school}</h3>
              <p className="text-sm text-neutral-700">
                {item.degree}
                {item.major && ` in ${item.major}`}
                {item.concentration && ` concentration in ${item.concentration}`}
              </p>
              <p className="text-xs text-neutral-500">{item.startYear} – {item.endYear}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              )}
            </div>
          ))
        )}
      </div>

      <EducationForm
        open={edit}
        onClose={() => setEdit(false)}
        onSave={handleSave}
        title=":: edit education"
        initialValue={education}
      />
    </section>
  );
}