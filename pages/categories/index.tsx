import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NavbarTest from "@/components/organisms/Navbar";
import CardBookCategory from "@/components/molecules/CardBookCategory";
import React from "react";

export default function categories() {
  return (
    <>
      <NavbarTest />
      <Breadcrumbs>Categories</Breadcrumbs>
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
          <CardBookCategory />
        </div>
      </div>
    </>
  );
}
