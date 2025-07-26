import Image from "next/image";
import Front from "../../../public/assets/frontpageimages/front.avif";
const TabletHero = () => {
  return (
    <div>
      <div className="h-[283] md:h-[511px] w-full relative">
        <Image src={Front} alt="front" fill className="object-cover"></Image>
      </div>
      <h1 className="text-xl font-semibold text-red-600 mt-3">
        গোপালগঞ্জে সহিংসতা
        <span className="mx-2 text-lg text-gray-400 font-bold select-none">
          •
        </span>
        <span className="text-black col-span-12 text-xl font-semibold">
          প্রাণঘাতী অস্ত্র ব্যবহারের যৌক্তিকতা পায়নি পর্যবেক্ষণ দল
        </span>
      </h1>
      <p className="text-gray-500 mt-3">
        গোপালগঞ্জের আইনশৃঙ্খলা ও মানবাধিকার পরিস্থিতির প্রাথমিক পর্যালোচনার
        উদ্দেশ্যে ২২ জুলাই জেলাটি সফর করেন ১১ জন নাগরিক।{" "}
      </p>
      <p className="text-gray-500 col-span-12 text-xs mt-5">৩ ঘণ্টা আগে</p>
    </div>
  );
};

export default TabletHero;
