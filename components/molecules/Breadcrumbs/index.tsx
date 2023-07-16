import Link from "next/link";
import React from "react";

type Props = {
  children: string;
};

export default function Breadcrumbs(props: Props) {
  const { children } = props;
  return (
    <div className="container mx-auto sm:px-4 lg:px-8 lg:pt-24 lg:pb-6 text-sm">
      <Link href="/">Home</Link>
      <span className="mx-1">/</span>
      <span>{children}</span>
    </div>
  );
}
