import React from 'react';
import { Search, Rocket } from 'lucide-react';

export default function Toolbar({ query, setQuery, count }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="flex items-center gap-2 text-neutral-700">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-sm">
          <Rocket size={18} />
        </div>
        <div>
          <p className="text-sm text-neutral-500">Items</p>
          <p className="text-lg font-medium text-neutral-900">{count} total</p>
        </div>
      </div>

      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search items..."
          className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
        />
      </div>
    </div>
  );
}
