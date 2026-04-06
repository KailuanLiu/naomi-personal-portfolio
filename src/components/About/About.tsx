'use client';

import * as React from 'react';
import AboutForm from '@/components/About/AboutForm';

type AboutProps = {
  isLoggedIn: boolean;
}

export default function About({ isLoggedIn }: AboutProps) {
  const [edit, setEdit] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(
    'loading...'
  );

  React.useEffect(() => {
    fetch('/api/about', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.content) setAboutText(data.content);
      });
  }, []);

  const handleSave = async (newText: string): Promise<void> => {
    setAboutText(newText);
    const res = await fetch('/api/about', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ about: newText }),
    });

    if (!res.ok) {
      throw new Error('Failed to save about text');
    }
  };

  return (
    <section className="rounded-3xl bg-white p-6 shadow">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-xl font-bold text-neutral-700">
          :: about me
        </h2>

        {isLoggedIn && (
          <button
            onClick={() => setEdit(true)}
            className="h-10 rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100"
          >
            Edit
          </button>
        )}
      </div>

      <p className="text-sm text-neutral-600">{aboutText}</p>

      <AboutForm
        open={edit}
        onClose={() => setEdit(false)}
        onSave={handleSave}
        title=":: edit about me"
        initialValue={aboutText}
      />
    </section>
  );
}