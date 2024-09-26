import { useTranslations } from "next-intl";
import React from "react";
import { ShareLinks } from "./ShareLinks";
import { VideoPlayer } from "./VideoPlayer";
import Image from "next/image";

export const VideoSection = () => {
  const t = useTranslations("Video");
  if (!t("videoLink")) {
    // Render a loading state or null until the translation is ready
    return null;
  }

  return (
    <section className="relative">
      <div className="container">
        <div>
          <div className="flex flex-col items-center justify-between px-[0px] lg:flex-row lg:items-end lg:pe-10 lg:ps-20">
            <div className="">
              {" "}
              <h2 className="font-semiBold mx-auto w-full text-center text-[25px] font-bold leading-[34px] text-primaryLight sm:text-[40px] sm:leading-[54px] lg:text-start">
                <span className="block"> {t("title")}</span>
                <span className="block"> {t("title2")}</span>
              </h2>
            </div>

            <div className="relative mt-6 flex h-[113px] w-[212px] flex-col items-center justify-center sm:h-[194px] sm:w-[363px] lg:mt-0">
              <div className="relative z-10 mt-2 flex flex-col items-center justify-center sm:mt-10">
                {" "}
                <p className="text-center text-[9px] font-semibold leading-[13px] text-darkPink sm:text-[17px] sm:leading-[23px]">
                  {t("ergoCloud.title")}
                </p>
                <div className="relative h-[13px] w-[47px] md:h-[23px] md:w-[81px] my-2">
                  <Image src={"/partneri/ergo.svg"} alt={"Novartis"} fill />
                </div>
                <a
                  href="https://www.ergo.lv/lv/privatpersonam/veza-apdrosinasana"
                  target="_blank"
                >
                  <button
                    className={`rounded-[17px] bg-lightPink px-[12px] py-1 font-openSans text-[9px] font-semibold text-darkPink transition duration-300 ease-in-out hover:bg-darkPink hover:text-primaryLight sm:mt-2 sm:px-[18px] sm:py-[8px] sm:text-[16px]`}
                  >
                    {t("ergoCloud.btn_title")}
                  </button>
                </a>
              </div>

              <Image
                src={"/clouds/r-cloud-7.svg"}
                fill
                alt="Ergo cloud"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-[40px] overflow-hidden rounded-[20px] shadow-bottomRight sm:mt-[70px]">
            <VideoPlayer initialVideoLink={`${t("videoLink")}`} />
          </div>

          <ShareLinks
            title={`${t("shareText")}`}
            copyBtnText={`${t("copy")}`}
            copieSuccessText={`${t("copied")}`}
            shareLink={t("videoLink")}
          />
        </div>
      </div>
    </section>
  );
};
