import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const PurchaseSection = () => {
  const t = useTranslations("Purchase");
  const l = useTranslations("Index");

  return (
    <section className="container relative pb-[100px] pt-[70px] sm:pt-[100px] md:pb-[75px] lg:pt-[140px]">
      <div>
        <h2 className="mx-auto text-center font-openSans text-[26px] font-bold leading-[30px] text-darkPink sm:text-[40px] sm:leading-[48px] md:w-8/12">
          {t("description")}
        </h2>
      </div>

      <div className="mb-[40px] mt-[70px] flex flex-row flex-wrap justify-around gap-2">
        <div className="plain-window after:bg:h-full relative mb-2 min-h-[300px] w-[197px] rounded-[70px] border-[11px] border-primaryLight bg-lightPink pt-[30px] transition-all duration-300 ease-linear after:absolute after:left-0 after:right-0 after:top-0 after:z-[11] after:h-[93px] after:w-full after:rounded-t-[58px] after:bg-lightPink after:shadow-bottom after:transition-all after:duration-300 after:ease-linear hover:bg-darkPink hover:after:h-[61px] hover:after:bg-lightPink sm:mb-0">
          <div className="title relative z-[12] my-auto text-center">
            <p className="my-auto text-wrap px-[40px] text-center text-[18px] font-bold leading-[25px] text-darkPink">
              {t("donateClasses.economic.title")}
            </p>
          </div>

          <div className="flex h-full flex-col items-center pt-[40px]">
            <div className="relative z-[9] mt-[-20px] font-openSans text-[100px] font-extrabold leading-[80px] text-primaryLight">
              {t("donateClasses.economic.price")}
              <span className="text-[30px] font-normal">€</span>
            </div>
            <Link
              href={`${t("donateClasses.economic.link")}`}
              target="_blank"
              className="mb-[40px] rounded-[30px] bg-primaryLight px-8 py-2 font-bold text-darkPink"
            >
              {t("donateBtn")}
            </Link>
          </div>
        </div>

        <div className="plain-window after:bg:h-full relative mb-2 min-h-[300px] w-[197px] rounded-[70px] border-[11px] border-primaryLight bg-lightPink pt-[30px] transition-all duration-300 ease-linear after:absolute after:left-0 after:right-0 after:top-0 after:z-[11] after:h-[93px] after:w-full after:rounded-t-[58px] after:bg-lightPink after:shadow-bottom after:transition-all after:duration-300 after:ease-linear hover:bg-darkPink hover:after:h-[61px] hover:after:bg-lightPink sm:mb-0">
          <div className="title relative z-[12] my-auto text-center">
            <p className="my-auto text-wrap px-[40px] text-center text-[18px] font-bold leading-[25px] text-darkPink">
              {t("donateClasses.business.title")}
            </p>
          </div>

          <div className="flex h-full flex-col items-center pt-[40px]">
            <div className="relative z-[9] mt-[-20px] font-openSans text-[100px] font-extrabold leading-[80px] text-primaryLight">
              {t("donateClasses.business.price")}
              <span className="text-[30px] font-normal">€</span>
            </div>
            <Link
              href={`${t("donateClasses.business.link")}`}
              target="_blank"
              className="mb-[40px] rounded-[30px] bg-primaryLight px-8 py-2 font-bold text-darkPink"
            >
              {t("donateBtn")}
            </Link>
          </div>
        </div>

        <div className="plain-window after:bg:h-full relative mb-2 min-h-[300px] w-[197px] rounded-[70px] border-[11px] border-primaryLight bg-lightPink pt-[30px] transition-all duration-300 ease-linear after:absolute after:left-0 after:right-0 after:top-0 after:z-[11] after:h-[93px] after:w-full after:rounded-t-[58px] after:bg-lightPink after:shadow-bottom after:transition-all after:duration-300 after:ease-linear hover:bg-darkPink hover:after:h-[61px] hover:after:bg-lightPink sm:mb-0">
          <div className="title relative z-[12] my-auto text-center">
            <p className="my-auto text-wrap px-[45px] text-center text-[18px] font-bold leading-[25px] text-darkPink">
              {t("donateClasses.vip.title")}
            </p>
          </div>

          <div className="flex h-full flex-col items-center pt-[40px]">
            <div className="relative z-[9] mt-[-20px] font-openSans text-[100px] font-extrabold leading-[80px] text-primaryLight">
              {t("donateClasses.vip.price")}
              <span className="text-[30px] font-normal">€</span>
            </div>
            <Link
              href={`${t("donateClasses.vip.link")}`}
              target="_blank"
              className="mb-[40px] rounded-[30px] bg-primaryLight px-8 py-2 font-bold text-darkPink"
            >
              {t("donateBtn")}
            </Link>
          </div>
        </div>

        <div className="plain-window after:bg:h-full relative mb-2 min-h-[300px] w-[197px] rounded-[70px] border-[11px] border-primaryLight bg-lightPink pt-[30px] transition-all duration-300 ease-linear after:absolute after:left-0 after:right-0 after:top-0 after:z-[11] after:h-[93px] after:w-full after:rounded-t-[58px] after:bg-lightPink after:shadow-bottom after:transition-all after:duration-300 after:ease-linear hover:bg-darkPink hover:after:h-[61px] hover:after:bg-lightPink sm:mb-0">
          <div className="title relative z-[12] my-auto text-center">
            <p className="my-auto text-wrap px-[45px] text-center text-[18px] font-bold leading-[25px] text-darkPink">
              {t("donateClasses.other.title")}
            </p>
          </div>

          <div className="flex h-full flex-col items-center pt-[40px]">
            <div className="relative z-[9] mt-[-20px] font-openSans text-[100px] font-extrabold uppercase leading-[80px] text-primaryLight">
              {t("donateClasses.other.price")}
              <span className="text-[30px] font-normal">€</span>
            </div>
            <Link
              href={`${t("donateClasses.other.link")}`}
              target="_blank"
              className="mb-[40px] rounded-[30px] bg-primaryLight px-8 py-2 font-bold text-darkPink"
            >
              {t("donateBtn")}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex flex-row flex-wrap items-center justify-center gap-10">
        <div className="relative h-[18px] w-[44px]">
          <Image src={"/maksajumi/Pay.svg"} alt={"Pay"} fill />
        </div>
        <div className="relative h-[18px] w-[44px]">
          <Image src={"/maksajumi/GPay.svg"} alt={"Pay"} fill />
        </div>
        <div className="relative h-[13px] w-[40px]">
          <Image src={"/maksajumi/Visa.svg"} alt={"Pay"} fill />
        </div>
        <div className="relative h-[14px] w-[30px]">
          <Image src={"/maksajumi/Master.svg"} alt={"Pay"} fill />
        </div>
        <div className="relative h-[15px] w-[56px]">
          <Image src={"/maksajumi/PayPal.svg"} alt={"Pay"} fill />
        </div>
      </div>
    </section>
  );
};
