import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NavbarTest from "@/components/organisms/NavbarTest";
import React from "react";

export default function signup() {
  return (
    <>
      <NavbarTest />
      <Breadcrumbs>Sign up</Breadcrumbs>
      <div className="container mx-auto flex justify-center px-4 lg:px-8">
        Sign up
      </div>
    </>
  );
}
