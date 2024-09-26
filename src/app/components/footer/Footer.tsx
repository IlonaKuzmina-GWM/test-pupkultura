import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "./FooterSocialLinks";

export const Footer = () => {
  const t = useTranslations("Footer.aditionalInformation");
  const o = useTranslations("Footer");

  return (
    <footer className="bg-primaryLight pb-[100px]">
      <div className="container flex flex-col md:flex-row">
        <div className="mb-10 flex w-full flex-col justify-between  md:me-[40px] md:w-4/12">
          <div className="flex flex-row md:flex-col justify-between mb-6 md:mb-0">
            <div className="md:mx-auto max-w-[178px] md:max-w-[335px] ">
              <Link href={"https://rozavilciens.mozello.lv/"} target="_blank">
                <Image
                  src={"/RV_LV.svg"}
                  alt={""}
                  width={335}
                  height={194}
                  className="h-auto w-full"
                />
              </Link>
            </div>

            <FooterSocialLinks />
          </div>

          <p className="text-[12px] font-normal leading-[15px] text-lightPink sm:ms-[20px] md:ms-[20px] lg:ms-[80px]">
            {o("organizator")}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 sm:mt-[40px] sm:flex-row md:mt-[160px] md:w-7/12 md:gap-1">
          <div className="w-full border-l-[1px] border-l-darkPink ps-5 sm:w-6/12">
            <div>
              <h3 className="mb-[20px] font-openSans text-[16px] font-semibold leading-[22px] text-darkPink">
                {t("contacts.title")}
              </h3>
              <Link
                className="block text-[16px] font-normal leading-[22px] text-lightPink"
                href={`tel:${t("contacts.phone")}`}
              >
                {t("contacts.phone")}
              </Link>
              <Link
                className="block text-[16px] font-normal leading-[22px] text-lightPink"
                href={`mailto:${t("contacts.email")}`}
              >
                {t("contacts.email")}
              </Link>
            </div>

            <div className="mt-[20px]">
              <h3 className="mb-[20px] font-openSans text-[16px] font-semibold leading-[22px] text-darkPink">
                {t("address.title")}
              </h3>
              <p className="w-full text-[16px] font-normal leading-[22px] text-lightPink sm:w-[60%]">
                {t("address.content")}
              </p>
            </div>
          </div>

          <div className="w-full border-l-[1px] border-l-darkPink ps-5 sm:w-6/12">
            <div>
              <h3 className="mb-[20px] font-openSans text-[16px] font-semibold leading-[22px] text-darkPink">
                {t("requisites.title")}
              </h3>
              <p className="text-[16px] font-normal leading-[22px] text-lightPink">
                {t("requisites.content")}
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="mb-[20px] font-openSans text-[16px] font-semibold leading-[22px] text-darkPink">
                {t("bankAcount.title")}
              </h3>
              <p className="text-[16px] font-normal leading-[22px] text-lightPink">
                <span>{t("bankAcount.content.bankName")}</span>
                <br />
                <span>{t("bankAcount.content.acountNumber")}</span>
                <br />
                <span>{t("bankAcount.content.swift")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
