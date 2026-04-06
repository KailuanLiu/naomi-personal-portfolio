'use client';

import * as React from 'react';
import type { EducationItem } from './Education';

type EducationFormProps = {
  open: boolean;
  onClose: () => void;
  onSave: (value: EducationItem[]) => Promise<void> | void;
  title?: string;
  initialValue?: EducationItem[];
};

export default function EducationForm({
  open,
  onClose,
  onSave,
  title = 'Edit Education',
  initialValue = [],
}: EducationFormProps) {
  const [items, setItems] = React.useState<EducationItem[]>(initialValue);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setItems(initialValue);
    }
  }, [open, initialValue]);

  if (!open) return null;

  const handleChange = (
    index: number,
    field: keyof EducationItem,
    value: string
  ) => {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]:
        field === 'startYear' || field === 'endYear'
          ? Number(value)
          : value,
    };

    setItems(updated);
  };

  const handleAdd = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        school: '',
        degree: '',
        major: '',
        concentration: '',
        startYear: new Date().getFullYear(),
        endYear: new Date().getFullYear(),
        description: '',
      },
    ]);
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await onSave(items);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-700"
          >
            Close
          </button>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="space-y-3 rounded-xl border border-gray-200 p-4"
            >
              <input
                value={item.school}
                onChange={(e) => handleChange(index, 'school', e.target.value)}
                placeholder="School"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <input
                value={item.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                placeholder="Degree"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <input
                value={item.major}
                onChange={(e) => handleChange(index, 'major', e.target.value)}
                placeholder="Major"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <input
                value={item.concentration}
                onChange={(e) =>
                  handleChange(index, 'concentration', e.target.value)
                }
                placeholder="Concentration"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  value={item.startYear}
                  onChange={(e) =>
                    handleChange(index, 'startYear', e.target.value)
                  }
                  placeholder="Start Year"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />

                <input
                  type="number"
                  value={item.endYear}
                  onChange={(e) =>
                    handleChange(index, 'endYear', e.target.value)
                  }
                  placeholder="End Year"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <textarea
                value={item.description}
                onChange={(e) =>
                  handleChange(index, 'description', e.target.value)
                }
                placeholder="Description"
                className="min-h-[100px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <button
                onClick={() => handleRemove(index)}
                className="rounded-md border border-red-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={handleAdd}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
          >
            Add School
          </button>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={saving}
            className="h-10 rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="h-10 rounded-md bg-neutral-900 px-4 text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}