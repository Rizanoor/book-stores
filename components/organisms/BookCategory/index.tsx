import React from "react";
import CardBook from "@/components/molecules/CardBook";

export default function index() {
  return (
    <>
      <div id="features" className="cards-1">
        <h2 className="mb-5">Book Category</h2>
        <div className="container px-4 sm:px-8 xl:px-4">
          <CardBook category="Fiksi" />
          <CardBook category="Sejarah" />
          <CardBook category="Gaya Hidup" />
        </div>
      </div>
    </>
  );
}
