import React, { FC } from "react";
type CloudsSectionProps = {
  title: string;
  content: string;
  bgImage: string;
};

export const FactorCloud: FC<CloudsSectionProps> = ({
  title,
  content,
  bgImage,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${bgImage} bg-contain bg-center bg-no-repeat`}
    >
      <h3 className="mb-[10px] text-center font-openSans text-[25px] font-bold leading-[34px] text-darkPink md:mb-[20px] md:text-[30px] md:leading-[40px]">
        {title}
      </h3>
      <p className="font-opensSans text-center text-[15px] leading-[20px] text-darkPink md:text-[20px] md:leading-[27px]">
        {content}
      </p>
    </div>
  );
};
