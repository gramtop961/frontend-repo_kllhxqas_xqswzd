import React, { useState, useEffect } from 'react';

export default function ItemForm({ onSubmit, editingItem, onCancelEdit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name || '');
      setPrice(String(editingItem.price ?? ''));
      setDescription(editingItem.description || '');
    } else {
      setName('');
      setPrice('');
      setDescription('');
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const payload = {
      name: name.trim(),
      price: price === '' ? null : Number(price),
      description: description.trim(),
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          step="0.01"
          className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition"
        >
          {editingItem ? 'Update Item' : 'Add Item'}
        </button>
        {editingItem && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 hover:bg-neutral-50 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
