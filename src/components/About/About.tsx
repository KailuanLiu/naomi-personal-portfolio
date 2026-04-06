'use client';

import * as React from 'react';
import AboutForm from '@/components/About/AboutForm';

export default function About() {
  const [edit, setEdit] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(
    'Add your about text in the database.'
  );

  React.useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => {
        if (data.content) setAboutText(data.content);
      });

    fetch('/api/me')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.isLoggedIn);
      });
  }, []);

  const handleSave = async (newText: string): Promise<void> => {
    const res = await fetch('/api/about', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ about: newText }),
    });

    const data = await res.json();
    console.log('API response:', data);

    if (!res.ok) {
      throw new Error('Failed to save about text');
    }

    setAboutText(newText);
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