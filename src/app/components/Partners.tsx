import { useTranslations } from "next-intl";
import Image from "next/image";

export const Partners = () => {
  const t = useTranslations("Partners");

  return (
    <section className="container relative pb-[0px] pt-[100px] md:pb-[0px] md:pt-[125px] max-w-[1440px]">
      <div className="flex flex-row flex-wrap lg:flex-nowrap lg:justify-between lg:gap-6">
        <div className="w-1/2 lg:w-auto">
          <p className="mb-[10px] text-[15px] font-bold leading-[20px] text-primaryLight md:mb-[30px] md:text-[20px] md:leading-[27px]">
            {t("titleOne")}
          </p>
          <div>
            {" "}
            <div className="relative h-[30px] w-[103px] md:h-[49px] md:w-[169px]">
              <Image src={"/partneri/ergo.svg"} alt={"Novartis"} fill />
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-auto">
          <p className="mb-[10px] text-[15px] font-bold leading-[20px] text-primaryLight md:mb-[30px] md:text-[20px] md:leading-[27px]">
            {t("titleTwo")}
          </p>
          <div className="flex flex-col gap-6">
            <div className="relative h-[25px] w-[107px] md:h-[40px] md:w-[175px]">
              <Image
                src={"/partneri/veselibas-centrs.svg"}
                alt={"Veselības centrs"}
                fill
              />
            </div>
            <div className="relative h-[23px] w-[56px] md:h-[35px] md:w-[90px]">
              <Image src={"/partneri/always.svg"} alt={"Always"} fill />
            </div>
            <div className="relative h-[17px] w-[107px] md:h-[25px] md:w-[155px]">
              <Image src={"/partneri/novartis.svg"} alt={"Novartis"} fill />
            </div>
            <div className="relative h-[25px] w-[51px] md:h-[38px] md:w-[73px]">
              <Image src={"/partneri/roche.svg"} alt={"Roche"} fill />
            </div>
          </div>
        </div>

        <div className="w-full -mt-[60px] lg:mt-0 lg:w-auto">
          <p className="mb-[10px] text-[15px] font-bold leading-[20px] text-primaryLight md:mb-[30px] md:text-[20px] md:leading-[27px]">
            {t("titleThree")}
          </p>
          <div>
            {" "}
            <div className="relative h-[20px] w-[60px] md:h-[29px] md:w-[83px]">
              <Image src={"/partneri/delfi.svg"} alt={"Delfi"} fill />
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-10 lg:mt-0 lg:w-auto">
          <p className="mb-[10px] text-[15px] font-bold leading-[20px] text-primaryLight md:mb-[30px] md:text-[20px] md:leading-[27px]">
            {t("titleFor")}
          </p>
          <div>
            {" "}
            <div className="relative h-[30px] w-[52px] md:h-[42px] md:w-[72px]">
              <Image src={"/partneri/life.svg"} alt={"3 life"} fill />
            </div>
          </div>
        </div>

        <div className=" w-1/2 mt-10 lg:mt-0  lg:w-auto">
          <p className="mb-[10px] text-[15px] font-bold leading-[20px] text-primaryLight md:mb-[30px] md:text-[20px] md:leading-[27px]">
            {t("titleFive")}
          </p>
          <div  className="flex flex-col gap-6">
            <div className="relative h-[27px] w-[77px] md:h-[41px] md:w-[119px] mb-2">
              <Image src={"/partneri/McCann.svg"} alt={"McCann"} fill />
            </div>

            <div className="relative h-[11px] w-[112px] md:h-[16px] md:w-[172px] mb-3 -ms-1">
              <Image
                src={"/partneri/white lable.svg"}
                alt={"White lable"}
                fill
              />
            </div>

            <div className="relative h-[11px] w-[87px] md:h-[17px] md:w-[134px] mb-2">
              <Image src={"/partneri/mindshare.svg"} alt={"Mindshare"} fill />
            </div>

            <div className="relative h-[15px] w-[60px] md:h-[24px] md:w-[93px]">
              <Image src={"/partneri/urberg.svg"} alt={"urberg"} fill />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden absolute bottom-[50px] left-[75px] w-[50%] max-w-[77px] ">
        <Image
          src={"/clouds/r-cloud-3.svg"}
          alt={"Cloud"}
          width={277}
          height={147}
          className="h-auto w-full"
        />
      </div>

      <div className="absolute bottom-[-30px] right-9 w-[50%] max-w-[87px] lg:max-w-[223px] lg:right-[40%] lg:animate-[moveToRight_45s_infinite]">
        <Image
          src={"/clouds/r-cloud-1.svg"}
          alt={"Cloud"}
          width={277}
          height={147}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};
