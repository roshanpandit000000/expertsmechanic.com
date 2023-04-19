import SelectBox from "../components/SelectBox";
import HomePageSlider from "../components/HomePageSlider";
import Layout from "../components/Layout";
import Services from "../components/Services";
import CustomServices from "../components/CustomServices";
import CascadingDropdown from "@/components/CascadingDropdown";
import MechanicSpecial from "@/components/MechanicSpecial";
import WorkShop from "@/components/WorkShop";
import LuxuryCar from "@/components/LuxuryCar";
import Banafits from "@/components/Banafits";
import Profits from "@/components/Profits";
import Testimoniul from "@/components/Testimoniul";
import Questions from "@/components/Questions";
import Firstquality from "@/components/Firstquality";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <>
      <Layout title="Home">
        <HomePageSlider />
        
        <SelectBox />
        <Services />
        <CustomServices />
        <MechanicSpecial />
        <WorkShop />
        <LuxuryCar />
        <Banafits />
        <Profits />
        <Testimoniul />
        <Questions />
        <Firstquality />
        <WhyChoose />
      </Layout>
    </>
  );
}
