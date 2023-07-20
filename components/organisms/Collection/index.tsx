import React from 'react';
import CardBookCategory from '@/components/molecules/CardBookCategory'

export default function index() {
  return (
    <div className="pt-8 pb-12 bg-gray">
      <div className="container px-4 sm:px-8">
        <div className="flex justify-between">
          <h5 className="lg:max-w-xl lg:text-4xl">Koleksi</h5>
          <a className="btn-solid-lg secondary" href="#your-link">
            Lihat Semua
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
        </div>
      </div>
    </div>
  );
}