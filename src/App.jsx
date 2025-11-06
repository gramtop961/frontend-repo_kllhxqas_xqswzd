import React, { useEffect, useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import Toolbar from './components/Toolbar';
import ItemForm from './components/ItemForm';
import ItemTable from './components/ItemTable';

// Simple client-side CRUD for demo purposes. Backend can be wired later.
export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(null);

  // Filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      [i.name, String(i.price ?? ''), i.description]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  const handleCreateOrUpdate = (payload) => {
    if (editing) {
      setItems((prev) => prev.map((it) => (it.id === editing.id ? { ...it, ...payload } : it)));
      setEditing(null);
    } else {
      setItems((prev) => [
        { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...payload },
        ...prev,
      ]);
    }
  };

  const handleEdit = (item) => setEditing(item);

  const handleDelete = (item) => {
    // eslint-disable-next-line no-restricted-globals
    const ok = confirm(`Delete "${item.name}"?`);
    if (ok) setItems((prev) => prev.filter((it) => it.id !== item.id));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeroCover />

      <main className="mx-auto w-full max-w-6xl px-6 py-10 space-y-8">
        <Toolbar query={query} setQuery={setQuery} count={filtered.length} />

        <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm">
          <ItemForm
            onSubmit={handleCreateOrUpdate}
            editingItem={editing}
            onCancelEdit={() => setEditing(null)}
          />
        </div>

        <ItemTable items={filtered} onEdit={handleEdit} onDelete={handleDelete} />

        <footer className="py-8 text-center text-sm text-neutral-500">
          Built with a modern, minimalist vibe. Interact with the cover to see the soft red ripple.
        </footer>
      </main>
    </div>
  );
}
