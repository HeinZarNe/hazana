import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import { GiftCard } from "@/components/GiftCard";
import Hero from "@/components/Hero";
import JustForYou from "@/components/JustForYou";
import MallCardContainer from "@/components/MallCardContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <Hero />
      <FlashSale />
      <MallCardContainer />
      <Categories />
      <JustForYou />
      <hr className="border-[#e3dddd] w-full"/>
      <GiftCard/>
     
    </div>
  );
}
