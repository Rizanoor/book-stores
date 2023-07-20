import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NavbarTest from "@/components/organisms/Navbar";
import React from "react";

export default function categories() {
  return (
    <>
      <NavbarTest />
      <Breadcrumbs>Categories</Breadcrumbs>
      <div className="container mx-auto flex justify-center px-4 lg:px-8">
        categories
      </div>
    </>
  );
}
