import Link from "next/link";
import React from "react";
import { fetchApi } from "@/components/services";
import { useState, useEffect } from "react";

export default function index() {
  const [dataList, setDataList] = useState([] as bookDetails[]);
  const [isLoading] = useState(false);

  const getData = async () => {
    const data = await fetchApi();
    setDataList(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? <div>Loading</div> : ""}
      {dataList.map((item) => (
        <div
          className="relative overflow-hidden bg-white shadow-md rounded-xl"
          key={item.id}
        >
          <Link href={`/book/${item.id}`}>
            <img
              className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
              src={"images" + "/" + item.images}
              alt="picturebook"
            />
          </Link>
          <div className="px-4 text-left">
            <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.title}
            </h5>
            <p className="">{item.penulis}</p>
            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
              {item.deskripsi}
            </p>
            <span className="rating-more">
              <img className="rating" src="/svg/star5.svg" alt="Rating" />
              <Link className="more" href={`/book/${item.id}`}>
                Selengkapnya
              </Link>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
