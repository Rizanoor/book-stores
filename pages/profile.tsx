import React, { useState } from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Menu from "@/components/organisms/Profile/Menu";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Settings from "@/components/organisms/Profile/Settings";
import Subscription from "@/components/organisms/Profile/Subscription";
import Transactions from "@/components/organisms/Profile/Transactions";
import Password from "@/components/organisms/Profile/Password";
import TestNavbar from "@/components/organisms/TestNavbar";
import BtnShowMenuMobile from "@/components/atoms/Profile/Button/BtnShowMenuMobile";

export default function profile() {
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <TestNavbar />
      <Breadcrumbs>Profile</Breadcrumbs>
      <BtnShowMenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-8">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          isActiveIndex={isActiveIndex}
          setIsActiveIndex={setIsActiveIndex}
        />
        <div className="w-full lg:border-l border-gray-300 lg:pl-8 lg:w-3/4">
          {isActiveIndex === 1 && <Settings />}
          {isActiveIndex === 2 && <Subscription />}
          {isActiveIndex === 3 && <Transactions />}
          {isActiveIndex === 4 && <Password />}
        </div>
      </div>
      <Footer />
    </>
  );
}
