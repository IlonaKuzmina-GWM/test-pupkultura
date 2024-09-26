import { HeroSection } from "../components/heroSection/HeroSection";
import { VideoSection } from "../components/videoSection/VideoSection";

import { CloudsSection } from "../components/cloudsSection/CloudsSection";
import { Clouds } from "../components/Clouds";
import { Partners } from "../components/Partners";
import ImportantSection from "../components/ImportantSection";
import FurtherSection from "../components/FurtherSection";
import FactorsSection from "../components/factorsSection/FactorsSection";
import Image from "next/image";
import { PurchaseSection } from "../components/purchaseSection/PurchaseSection";

export default function Home({}: any) {
  return (
    <main className="relative font-openSans">
      <HeroSection />

      <div className="relative overflow-hidden">
        <PurchaseSection />
        <VideoSection />
        <ImportantSection />
        <FurtherSection />

        <div className="relative mx-auto h-[150px] max-w-[1440px] md:h-[390px]">
          <div className="max-w-1/3 sm:max-w-1/2 absolute left-[-80%] top-[-50%] -z-[10] h-[997px] w-[450px] rounded-[50%] bg-gradient-radial sm:left-[-50%] sm:top-[-80%] sm:h-[1956px] md:left-[-60%] md:w-[1440px]" />
          <div className="max-w-1/3 sm:max-w-1/2 absolute right-[-80%] top-[-50%] -z-[10] h-[997px] w-[450px] rounded-[50%] bg-gradient-radial sm:right-[-50%] sm:top-[-80%] sm:h-[1956px] sm:w-[1440px] md:right-[-60%]" />

          <div className="absolute left-[-70px] top-[-30px] hidden h-auto w-[20%] max-w-[367px] md:top-[110px] md:block md:w-[50%]">
            <Image
              src={"/clouds/r-cloud-8.svg"}
              alt={"Cloud"}
              width={367}
              height={172}
              className="h-auto w-full"
            />
          </div>
        </div>

        <FactorsSection />

        <CloudsSection />
        <Partners />
        <Clouds />
      </div>
    </main>
  );
}
