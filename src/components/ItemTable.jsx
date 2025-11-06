import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export default function ItemTable({ items, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Price</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Description</th>
            <th className="px-4 py-3 text-right text-sm font-medium text-neutral-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {items.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">No items yet. Add one above.</td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item._id || item.id} className="hover:bg-neutral-50/60">
                <td className="px-4 py-3 font-medium text-neutral-900">{item.name}</td>
                <td className="px-4 py-3 text-neutral-700">{item.price != null ? `$${Number(item.price).toFixed(2)}` : '-'}</td>
                <td className="px-4 py-3 text-neutral-700">{item.description}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => onDelete(item)}
                      className="inline-flex items-center gap-1 rounded-md bg-red-50 text-red-700 px-3 py-1.5 text-sm hover:bg-red-100"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
