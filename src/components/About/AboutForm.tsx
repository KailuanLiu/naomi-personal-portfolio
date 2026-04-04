'use client';

import * as React from 'react';

type PopupProps = {
  open: boolean;
  onClose: () => void;
  onSave: (value: string) => Promise<void> | void;
  title?: string;
  initialValue?: string;
};

export default function AboutForm({
  open,
  onClose,
  onSave,
  title = 'Edit',
  initialValue = '',
}: PopupProps) {
  const [value, setValue] = React.useState(initialValue);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setValue(initialValue);
    }
  }, [open, initialValue]);

  if (!open) return null;

  const handleSave = async () => {
    try {
      setSaving(true);
      await onSave(value);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-700"
          >
            Close
          </button>
        </div>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-[160px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
        />

        <div className="mt-4 flex justify-end gap-3">
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