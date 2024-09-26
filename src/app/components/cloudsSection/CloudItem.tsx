import React, { FC } from "react";
type CloudsSectionProps = {
  title: string;
  content: string;
  bgImage: string;
};

export const CloudItem: FC<CloudsSectionProps> = ({
  title,
  content,
  bgImage,
}) => {
  return (
    <div
      className={`flex flex-col justify-center sm:items-center ${bgImage} bg-contain bg-center bg-no-repeat`}
    >
      <h3 className="mb-[10px] text-start font-openSans text-[25px] font-bold leading-[34px] text-darkPink sm:mb-[20px] sm:text-center sm:text-[30px] sm:leading-[40px]">
        {title}
      </h3>
      <p className="font-opensSans text-start text-[15px] leading-[20px] text-darkPink sm:text-center sm:text-[20px] sm:leading-[27px]">
        {content}
      </p>
    </div>
  );
};
