"use client";

import { useState } from "react";
import NewsRow from "./NewsRow";

export interface NewsItem {
  id: string;
  headline: string;
  description: string;
  url: string;
  company: string;
  category: string;
  categories: string[];
  categoryIds: number[];
  publishedAt: string;
  publishedDate: string | null;
  source: string;
  sentiment: "positive" | "neutral" | "negative" | null;
  priorityScore: number | null;
  score: number | null;
}

interface NewsTableProps {
  items: NewsItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onRemoveCategory?: (newsId: string, categoryId: number) => void;
  sortOrder: "desc" | "asc";
  onSortChange: () => void;
}

export default function NewsTable({
  items,
  selectedId,
  onSelect,
  onRemoveCategory,
  sortOrder,
  onSortChange,
}: NewsTableProps) {
  const [previewDesc, setPreviewDesc] = useState<string | null>(null);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          <thead className="bg-surface-container text-on-surface-variant font-label-md uppercase tracking-wider sticky top-0 z-10 border-b border-outline-variant">
            <tr>
              <th className="px-md py-4 w-[36%] font-bold">Headline</th>
              <th className="px-md py-4 w-[12%] font-bold">Company</th>
              <th className="px-md py-4 w-[7%] font-bold">Priority</th>
              <th className="px-md py-4 w-[12%] font-bold">Category</th>
              <th
                className="px-md py-4 w-[10%] font-bold cursor-pointer select-none hover:text-primary transition-colors"
                onClick={onSortChange}
              >
                <span className="flex items-center gap-1">
                  Published
                  <span className="material-symbols-outlined text-[14px]">
                    {sortOrder === "desc" ? "expand_more" : "expand_less"}
                  </span>
                </span>
              </th>
              <th className="px-md py-4 w-[10%] font-bold">Source</th>
              <th className="px-md py-4 w-[8%] font-bold">Sentiment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {items.map((item) => (
              <NewsRow
                key={item.id}
                {...item}
                isSelected={selectedId === item.id}
                onSelect={() => onSelect(item.id)}
                onShowDescription={setPreviewDesc}
                onRemoveCategory={onRemoveCategory}
              />
            ))}
          </tbody>
        </table>
      </div>
      {previewDesc && (
        <div
          className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center"
          onClick={() => setPreviewDesc(null)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-3xl mx-4 p-6 shadow-xl border border-outline-variant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              {" "}
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Description
              </h3>
              <button
                className="p-1 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container transition-colors"
                onClick={() => setPreviewDesc(null)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="text-body-md text-on-surface leading-relaxed max-h-80 overflow-y-auto break-words whitespace-pre-wrap pr-1">
              {previewDesc}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
