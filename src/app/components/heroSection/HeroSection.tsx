import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroSection = () => {
  const t = useTranslations("Index");

  return (
    <div className="relative z-[1] mt-[-70px] bg-homeHeroBg bg-cover bg-center bg-no-repeat pt-[150px] sm:mt-[-150px] md:pt-[410px] lg:pt-[510px]">
      <div className="container pt-[260px]">
        <div className="absolute bottom-[-40px] left-0 right-0 z-[2] mx-auto w-[320px] sm:bottom-[-50px] sm:w-[450px] md:bottom-[-70px] md:w-[630px] lg:bottom-[-80px] lg:w-[800px]">
          <Image
            src={`/${t("heroElement")}`}
            alt={"Hero element"}
            width={637}
            height={245}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};
