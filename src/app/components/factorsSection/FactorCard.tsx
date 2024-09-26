import React from "react";
import Image from "next/image";

interface IFactorCard {
    title: string;
    icon: string;
    iconSize: string;
}

export const FactorCard = ({ title, icon, iconSize }: IFactorCard) => {
    return (
        <>
            <div className={`${iconSize} relative`}>
                <Image src={icon} alt="Factor icon" fill className="w-full h-auto" />
            </div>
            <p className="text-primaryLight  px-4 text-center font-bold mb-4 text-[13px] leading-[17px] md:text-[20px] md:leading-[27px]">
                {title}
            </p>
        </>
    );
};
