import CardsSection from "../components/CardsSection";
import Header from "../components/Header";
import Footer from "../components/Footer.tsx";
import { Snowfall } from "react-snowfall";

export default function Home() {
  return (
    <>
      <Header />
      <Snowfall snowflakeCount={300} />
      <CardsSection />
      <Footer />
    </>
  );
}
