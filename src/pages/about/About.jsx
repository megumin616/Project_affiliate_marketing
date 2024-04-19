import React from "react";
import Header from "../../components/header/Header";
import BannerAbout from "./componentsAbout/bannerAbout/BannerAbout";

// css files all 
import '../../css/bootstrap.min.css'
import '../../css/flex-slider.css'
import '../../css/lightbox.css'
import '../../css/owl-carousel.css'
import '../../css/templatemo-hexashop.css'
import OurAbout from "./componentsAbout/ourAbout/OurAbout";
import DetailAbout from "./componentsAbout/detailAbout/DetailAbout";
import SendMessage from "../../components/sendMessage/SendMessage";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <>
      <Header />
      <BannerAbout/>
      <DetailAbout/>
      <OurAbout/>
      <SendMessage/>
      <Footer/>
    </>
  );
}
