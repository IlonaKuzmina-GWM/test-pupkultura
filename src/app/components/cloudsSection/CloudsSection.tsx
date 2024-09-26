import { useTranslations } from "next-intl";
import { CloudItem } from "./CloudItem";
import Image from "next/image";
import { ShareBtn } from "../ShareBtn";
import { FactorCloud } from "../factorsSection/FactorCloud";

export const CloudsSection = () => {
  const t = useTranslations("Clouds");

  return (
    <section className="relative mt-[30px] pb-[30px] sm:mt-[170px] md:mt-[70px]">
      <h2 className="mx-auto text-center text-[25px] font-bold leading-[34px] text-primaryLight md:w-10/12 md:text-[40px] md:leading-[54px]">
        {t("title")}
      </h2>

      <div className="container flex w-full max-w-[1440px] flex-col pt-6 md:pt-10 lg:pb-[50px] lg:pt-0">
        <div className="relative">
          <FactorCloud
            title={t("firstCloud.title")}
            content={t("firstCloud.description")}
            bgImage={
              "animate-float bg-firstCloud w-full min-h-[168px] md:min-h-[228px] max-w-[360px] md:max-w-[487px] px-[35px] pb-[20px] sm:pb-3 sm:px-[50px] pt-[50px] xl:-ms-10"
            }
          />
        </div>

        <div className="relative mt-6 flex justify-center md:me-[150px] lg:z-10 lg:me-10 xl:-mt-[50px]">
          <div className="relative">
            <FactorCloud
              title={t("secondCloud.title")}
              content={t("secondCloud.description")}
              bgImage={
                "bg-secondCloud w-full min-h-[177px] md:min-h-[251px] max-w-[339px] md:max-w-[479px] px-[35px] pb-[20px] sm:pb-0 sm:px-[50px] pt-[50px]"
              }
            />
          </div>
        </div>

        <div className="relative -mt-[20px] flex justify-end lg:-mt-[370px] xl:-me-10">
          <div className="relative">
            <FactorCloud
              title={t("thirdCloud.title")}
              content={t("thirdCloud.description")}
              bgImage={
                "animate-float delay-75 bg-thirdCloud w-full h-[174px] max-w-[318px] md:h-[272px] md:max-w-[494px] px-[35px] pb-[20px] sm:pb-0 sm:px-[50px] pt-[50px]"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
