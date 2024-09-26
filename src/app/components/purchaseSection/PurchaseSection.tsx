import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import PurchaseCard from "./PurchaseCard";

export const PurchaseSection = () => {
  const t = useTranslations("Purchase");
  const l = useTranslations("Index");

  return (
    <section className="container relative  pb-[55px] pt-[70px] sm:pt-[100px] md:pb-[75px] lg:pt-[140px]">
      <div>
        <h2 className="mx-auto text-center font-openSans text-[20px] font-bold leading-[27px] text-darkPink md:w-8/12 md:text-[40px] md:leading-[54px]">
          {t("description")}
        </h2>
      </div>

      <div className="mb-5 md:mb-[40px] mt-7 md:mt-[70px] flex flex-row flex-wrap justify-around gap-2">
        <PurchaseCard
          title={t("donateClasses.economic.title")}
          link={t("donateClasses.economic.link")}
          btnName={t("donateBtn")}
          price={t("donateClasses.economic.price")}
        />

        <PurchaseCard
          title={t("donateClasses.business.title")}
          link={t("donateClasses.business.link")}
          btnName={t("donateBtn")}
          price={t("donateClasses.business.price")}
        />

        <PurchaseCard
          title={t("donateClasses.vip.title")}
          link={t("donateClasses.vip.link")}
          btnName={t("donateBtn")}
          price={t("donateClasses.vip.price")}
        />

        <PurchaseCard
          title={t("donateClasses.other.title")}
          link={t("donateClasses.other.link")}
          btnName={t("donateBtn")}
          price={t("donateClasses.other.price")}
        />
      </div>

      <div className="mt-0 md:mt-[50px] flex flex-row flex-wrap items-center justify-center gap-5 md:gap-10">
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
