import React from "react";

type Props = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BtnShowMenuMobile(props: Props) {
  const { showMenu, setShowMenu } = props;

  return (
    <div className="container mx-auto flex px-4 lg:px-8">
      <button
        className="text-sm my-2 py-2 px-4 rounded-lg bg-secondary text-white lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>
    </div>
  );
}
