import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

const FurtherSection = () => {
    const t = useTranslations("Further");

    return (
        <section className="container pt-10">
            <h2 className="mb-10 text-darkPink font-bold text-[25px] leading-[34px] md:text-[40px] md:leading-[54px] text-start md:text-center">
                {t("title")}
            </h2>
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
                    <div className="w-full lg:w-1/2 bg-[#ffffff80]  text-darkPink pt-8 px-8 pb-10 md:ps-[50px] md:pt-10 md:pe-[60px] md:pb-10 rounded-[20px] md:rounded-[30px]">
                        <h3 className="mb-5 md:mb-10 text-darkPink font-bold text-[25px] leading-[34px] md:text-[40px] md:leading-[54px]">
                            {t("firstItem.title")}
                        </h3>
                        <p className="font-opensSans text-darkPink text-[15px] leading-[20px] sm:text-[17px] sm:leading-[23px] font-semibold">
                            {" "}
                            {t("firstItem.content")}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 bg-[#ffffff80]  text-darkPink pt-8 px-8 pb-10 md:ps-[50px] md:pt-10 md:pe-[150px] md:pb-10 rounded-[20px] md:rounded-[30px]">
                        <h3 className="text-darkPink font-bold text-[25px] leading-[34px] md:text-[40px] md:leading-[54px] mb-5 md:mb-10">
                            {" "}
                            {t("secondItem.title")}
                        </h3>
                        <p className="font-opensSans text-darkPink text-[15px] leading-[20px] sm:text-[17px] sm:leading-[23px] font-semibold pb-6">
                            {" "}
                            {t("secondItem.content")}
                        </p>
                        <p className="font-opensSans text-darkPink text-[15px] leading-[20px] sm:text-[17px] sm:leading-[23px] font-semibold">
                            {" "}
                            {t("secondItem.contentTwo")}
                        </p>
                    </div>
                </div>

                <div className="relative w-full bg-darkPink text-primaryLight pt-8 px-8 pb-10 md:ps-[50px] md:pt-10 md:pe-[60px] md:pb-10 rounded-[20px] md:rounded-[30px]">
                    <h3 className="mb-4 font-bold text-[25px] leading-[34px] md:text-[40px] md:leading-[54px]">
                        {" "}
                        {t("thirdItem.title")}
                    </h3>
                    <p className="font-opensSans mb-4 text-[15px] leading-[20px] sm:text-[16px] sm:leading-[21px] font-semibold">
                        {" "}
                        {t("thirdItem.content")}
                    </p>
                    <h4 className="font-bold mb-4 text-[20px] leading-[27px]"> {t("thirdItem.smallTitle")}</h4>
                    <p className="font-opensSans mb-4 sm:mb-6 text-[15px] leading-[20px] sm:text-[16px] sm:leading-[21px] font-semibold">
                        {" "}
                        {t("thirdItem.smallContent")}
                    </p>
                    <button className=" sm:rounded-[30px] border-[1px] bg-primaryLight sm:py-[9px] sm:px-[20px] capitalize text-darkPink font-[600] font-openSans hover:bg-lightPink transition ease-in-out duration-300 px-[12px] py-1 text-[9px] sm:text-[16px] rounded-[17px]">
                        {" "}
                        {t("thirdItem.btn")}
                    </button>

                    <div className="block absolute w-[108px] md:w-[50%] md:max-w-[99px] bottom-[-110px]  left-5 md:bottom-[-60px] md:left-[30%] md:animate-[moveToLeft_45s_infinite]">
                        <Image
                            src={"/clouds/r-cloud-1.svg"}
                            alt={"Cloud"}
                            width={99}
                            height={57}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className=" bg-btnCloud bg-contain bg-no-repeat w-[200px] h-[80px] sm:w-[226px] sm:h-[98px] md:w-[279px] md:h-[120px] absolute bottom-[-50px] md:bottom-[-60px] right-0 lg:right-[80px] " />
                </div>
            </div>
        </section>
    );
};

export default FurtherSection;
