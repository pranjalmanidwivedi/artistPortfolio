'use client'

import React from 'react';
import writingData from '@/data/writing_data.json';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const ShayariPage = () => {
  const shayaris = writingData.writings.filter(
    (writing) => writing.type === 'shayari'
  );

  return (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-48 justify-evenly mt-10 px-4 py-4 pt-28">
      {shayaris.map((shayari) => (
        <div key={shayari.id} className="flex justify-evenly items-center">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p
              className="text-black mt-4 dark:text-neutral-200 text-center text-base"
              style={{ whiteSpace: 'pre-wrap' }} // Preserve line breaks
            >
              {shayari.description}
            </p>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
};

export default ShayariPage;