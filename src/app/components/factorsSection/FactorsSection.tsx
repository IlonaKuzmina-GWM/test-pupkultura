import { useTranslations } from "next-intl";
import React from "react";
import FactorsSlider from "./FactorsSlider";
import Image from "next/image";
import { FactorCardWrapper } from "./FactorCardWrapper";
import { FactorCard } from "./FactorCard";

const FactorsSection = () => {
    const t = useTranslations("Factors");

    return (
        <section className="relative">
            <div className="hidden md:block absolute w-[142px] h-[74px] top-[-70px] xl:top-[-20px] right-[5%] z-[-1]">
                <Image src={"/clouds/r-cloud-9.svg"} alt={"Cloud"} width={142} height={74} className="w-full h-auto" />
            </div>
            <h2 className="mx-auto md:w-10/12 mb-10 text-primaryLight font-bold text-[25px] leading-[34px] md:text-[40px] md:leading-[54px] text-center">
                {t("title")}
            </h2>
            <FactorsSlider>
                <FactorCardWrapper>
                    <FactorCard
                        title={t("oneItem.title")}
                        icon={"/icons/one-factor.svg"}
                        iconSize={"w-[62px] h-[62px] md:w-[91px] md:h-[91px]"}
                    />
                </FactorCardWrapper>

                <FactorCardWrapper>
                    <FactorCard
                        title={t("twoItem.title")}
                        icon={"/icons/two-factor.svg"}
                        iconSize={"w-[62px] h-[62px] md:w-[91px] md:h-[91px]"}
                    />
                </FactorCardWrapper>

                <FactorCardWrapper>
                    <FactorCard
                        title={t("threeItem.title")}
                        icon={"/icons/three-factor.svg"}
                        iconSize={"w-[79px] h-[36px] md:w-[117px] md:h-[54px] my-2 md:my-[23px] "}
                    />
                </FactorCardWrapper>

                <FactorCardWrapper>
                    <FactorCard
                        title={t("forItem.title")}
                        icon={"/icons/for-factor.svg"}
                        iconSize={"w-[67px] h-[67px] md:w-[100px] md:h-[100px]  "}
                    />
                </FactorCardWrapper>

                <FactorCardWrapper>
                    <FactorCard
                        title={t("fiveItem.title")}
                        icon={"/icons/five-factor.svg"}
                        iconSize={"w-[67px] h-[67px] md:w-[100px] md:h-[100px]  "}
                    />
                </FactorCardWrapper>

                <FactorCardWrapper>
                    <FactorCard
                        title={t("sixItem.title")}
                        icon={"/icons/six-factor.svg"}
                        iconSize={"w-[67px] h-[67px] md:w-[100px] md:h-[100px] "}
                    />
                </FactorCardWrapper>
            </FactorsSlider>
        </section>
    );
};

export default FactorsSection;
