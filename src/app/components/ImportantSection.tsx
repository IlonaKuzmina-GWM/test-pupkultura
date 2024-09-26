import React from "react";
import Image from "next/image";
import { CloudItem } from "./cloudsSection/CloudItem";
import { useTranslations } from "next-intl";

const ImportantSection = () => {
  const t = useTranslations("Important");

  return (
    <section className="relative flex flex-col gap-5 pt-10 md:pt-20 lg:flex-row">
      <div className="relative flex h-[200px] w-full items-start justify-center overflow-x-clip sm:h-[300px] sm:overflow-visible md:h-auto lg:w-1/2">
        {" "}
        <div className="absolute bottom-[50px] left-[0px] z-[-1] hidden max-w-[270px] md:block">
          <Image
            src={"/clouds/r-cloud-8.svg"}
            alt={"Cloud"}
            width={270}
            height={116}
            className="h-auto w-full"
          />
        </div>
        <div className="absolute left-[-100px] sm:relative sm:left-0">
          <CloudItem
            title={t("cloud.title")}
            content={t("cloud.description")}
            bgImage={
              "animate-float bg-firstCloud pl-[110px] items-start sm:pl-[70px] w-full min-w-[320px] min-h-[243px] max-w-[450px] px-[15px] pb-[20px] pt-[30px] sm:pb-[30px] sm:px-[90px] sm:pt-[70px]  lg:px-[70px] lg:pt-[60px] lg:pb-[30px] sm:min-h-[300px] sm:max-w-[640px]"
            }
          />
        </div>
        <div className="absolute bottom-[-40px] right-5 block w-[20%] max-w-[143px] md:bottom-[-70px] md:right-[150px] md:w-[50%] lg:bottom-[40px] lg:right-[30%] lg:animate-[moveToRight_45s_infinite]">
          <Image
            src={"/clouds/r-cloud-1.svg"}
            alt={"Cloud"}
            width={143}
            height={83}
            className="h-auto w-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[20%] max-w-[143px] sm:w-[50%] sm:animate-[moveToRight_45s_infinite] md:bottom-[-80px] md:left-0 lg:block">
          <Image
            src={"/clouds/r-cloud-2.svg"}
            alt={"Cloud"}
            width={143}
            height={83}
            className="h-auto w-full scale-x-[-1]"
          />
        </div>
      </div>

      <div className="relative mt-10 w-full max-w-[680px] px-4 sm:px-10 lg:mt-0 lg:w-1/2">
        <h3 className="text-[25px] font-bold leading-[34px] text-darkPink md:text-[40px] md:leading-[54px]">
          {t("listSection.title")}
        </h3>
        <div
          className="important-list"
          dangerouslySetInnerHTML={{ __html: t.raw("listSection.list") }}
        />
      </div>
    </section>
  );
};

export default ImportantSection;
