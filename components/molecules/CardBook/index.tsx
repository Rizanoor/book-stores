import Link from "next/link";
import React from "react";

type Props = {
  category: string;
};

export default function index(props: Props) {
  const { category } = props;

  return (
    <>
      <Link href={`/categories/${category}`} className="card">
        <div className="card-image">
          <img src="images/logo.png" alt="alternative" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <p className="mb-4">
            You sales force can use the app on any smartphone platform without
            compatibility issues
          </p>
        </div>
      </Link>
    </>
  );
}
