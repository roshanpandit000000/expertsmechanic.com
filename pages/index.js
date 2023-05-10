import SelectBox from "../components/SelectBox";
import HomePageSlider from "../components/HomePageSlider";
import Layout from "../components/Layout";

// import CascadingDropdown from "@/components/CascadingDropdown";
import Banafits from "@/components/Banafits";
import Profits from "@/components/Profits";
import Testimoniul from "@/components/Testimoniul";
import Questions from "@/components/Questions";
import Firstquality from "@/components/Firstquality";
import WhyChoose from "@/components/WhyChoose";
import CustomServices from "@/components/CustomServices";
import Services from "@/components/Services";
import WorkShop from "@/components/WorkShop";
import MechanicSpecial from "@/components/MechanicSpecial";
import LuxuryCar from "@/components/LuxuryCar";


export default function Home() {
  return (
    <>
      <Layout title="Home">
        <HomePageSlider />
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
