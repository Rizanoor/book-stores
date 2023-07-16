import ProfilePicture from "@/components/atoms/Profile/Menu/ProfilePicture";
import MenuNav from "@/components/molecules/Profile/MenuNav";
import React from "react";

type Props = {
  isActiveIndex: number;
  setIsActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Menu(props: Props) {
  const { isActiveIndex, setIsActiveIndex } = props;
  return (
    <div className="lg:pr-8 lg:w-1/4">
      <ProfilePicture w={64} h={64} classname="rounded-full" />
      <p className="text-center font-bold text-black py-2">User Satu</p>
      <MenuNav
        isActiveIndex={isActiveIndex}
        setIsActiveIndex={setIsActiveIndex}
      />
    </div>
  );
}
