import Link from "next/link";
import React from "react";

interface PurchaseCardProps {
  title: string;
  link: string;
  btnName: string;
  price: string;
}

const PurchaseCard = ({ title, link, btnName, price }: PurchaseCardProps) => {
  return (
    <div className="plain-window after:bg:h-full relative mb-2 min-h-[155px] md:min-h-[300px] w-[154px] rounded-[55px] md:rounded-[70px] border-[11px] border-primaryLight bg-lightPink pt-[30px] transition-all duration-300 ease-linear after:absolute after:left-0 after:right-0 after:top-0 after:z-[11] after:h-[93px] after:w-full after:rounded-t-[58px] after:bg-lightPink after:shadow-bottom after:transition-all after:duration-300 after:ease-linear hover:bg-darkPink hover:after:h-[61px] hover:after:bg-lightPink sm:mb-0 md:w-[197px]">
      <div className="title relative z-[12] my-auto text-center">
        <p className="my-auto text-wrap px-7 md:px-[45px] text-center text-[14px] font-bold leading-[16px] text-darkPink md:text-[18px] md:leading-[24px]">
          {title}
        </p>
      </div>
      <div className="flex h-full flex-col items-center pt-[40px]">
        <div className="relative z-[9] mt-[-20px] font-openSans text-[78px] font-extrabold uppercase leading-[50px] text-primaryLight md:text-[100px] md:leading-[80px]">
          {price}
          <span className="text-[30px] font-normal">€</span>
        </div>
        <Link
          href={link}
          target="_blank"
          className="mb-[40px] rounded-[30px] bg-primaryLight px-8 py-2 font-bold text-darkPink text-[12px] md:text-[16px]"
        >
          {btnName}
        </Link>
      </div>{" "}
    </div>
  );
};

export default PurchaseCard;
