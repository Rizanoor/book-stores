import React, { useEffect, useState } from "react";
import CardBookCategory from "@/components/molecules/CardBookCategory";
import Link from "next/link";
import { fetchApi } from "@/components/services";

export default function index() {
  const [dataList, setDataList] = useState([] as bookDetails[]);

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-8 pb-12 bg-gray">
      <div className="container px-4 sm:px-8">
        <div className="flex justify-between">
          <h5 className="lg:max-w-xl lg:text-4xl">Koleksi</h5>
          <Link className="btn-solid-lg secondary" href="/allbook">
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(dataList).length > 0 &&
            dataList.map((item, i) => (
              <div key={i}>
                <CardBookCategory
                  id={item.id}
                  title={item.title}
                  penulis={item.penulis}
                  deskripsi={item.deskripsi}
                  images={item.images}
                  kategori={item.kategori}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
