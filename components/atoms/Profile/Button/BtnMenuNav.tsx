import React from "react";

type Props = {
  isActiveIndex: number;
  setIsActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  children: string;
  index: number;
};

export default function BtnMenuNav(props: Props) {
  const { children, index, setIsActiveIndex, isActiveIndex } = props;

  const handleIsActive = () => {
    setIsActiveIndex(index);
  };

  return (
    <button onClick={handleIsActive}>
      <div
        className={`${
          isActiveIndex === index && "text-secondary"
        } text-left hover:text-secondary`}
      >
        {children}
      </div>
    </button>
  );
}
