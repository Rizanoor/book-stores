import Link from "next/link";
import React from "react";

export default function title() {
  return (
    <>
      <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
        <h1 className="mb-5 h1-large">Team management mobile application</h1>
        <p className="mb-8 p-large">
          Start getting things done together with your team based on Pavo's
          revolutionary team management features
        </p>
        <Link className="btn-solid-lg" href="/search">
          Cari buku
        </Link>
      </div>
    </>
  );
}
