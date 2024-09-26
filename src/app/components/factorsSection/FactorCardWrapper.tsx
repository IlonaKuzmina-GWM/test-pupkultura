import React from "react";

interface IFactorCardWrapper {
    children: React.ReactNode;
}

export const FactorCardWrapper = ({ children }: IFactorCardWrapper) => {
    return (
        <div className="swiper-slide">
            <div className="bg-lightPink card-wrapper h-[166px] md:h-[245px] shadow-cardShadow px-4 pt-8 pb-4 rounded-[20px] md:rounded-[30px] max-w-[131px] md:max-w-[194px] flex flex-col gap-4 md:gap-9 items-center">
                {children}
            </div>
        </div>
    );
};
