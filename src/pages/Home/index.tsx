import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DeliveryMen from "../../content/DeliveryMen.json";
import ReceiverMen from "../../content/ReceiverMen.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="1.svg"
        icon2=""
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="2.svg"
        icon2=""
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="3.svg"
        icon2=""
        id="mission"
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="4.svg"
        icon2=""
        id="product"
      />
      <ContentBlock
        type="left"
        title={DeliveryMen.title}
        content={DeliveryMen.text}
        icon="entregador1.png"
        icon2="entregador2.png"
        id="product"
      />
      <ContentBlock
        type="left"
        title={ReceiverMen.title}
        content={ReceiverMen.text}
        icon="cliente1.png"
        icon2="cliente2.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
