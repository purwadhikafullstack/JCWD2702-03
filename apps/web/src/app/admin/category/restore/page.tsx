'use client';
import FormRestoreCategory from '@/components/formRestore/category';
import { useGetRestoreCategory } from '@/features/restore/hook/category/useGetRestoreCategory';
import { IoMdTrash } from 'react-icons/io';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RestoreCategory() {
  const { dataRestoreCategory, isLoading } = useGetRestoreCategory();
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timeout = setTimeout(() => {
      setIsDebouncing(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div></div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <div className="text-3xl flex items-center gap-2 font-semibold pb-5">
          <IoMdTrash size={30} />
          Trash
        </div>
        <div>
          {isDebouncing ? (
            <div className="flex flex-col items-center justify-center">
              <span className="loading loading-bars loading-lg h-[50px]"></span>
              <div></div>
            </div>
          ) : (
            <div>
              <FormRestoreCategory restore={dataRestoreCategory} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
