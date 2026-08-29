import { Hero } from "@/components/Hero";
import { RestaurantIntro } from "@/components/RestaurantIntro";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { CTASection } from "@/components/CTASection";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <RestaurantIntro />
      <FeaturedMenu />
      <CTASection />
      <VisitSection />
    </>
  );
}
