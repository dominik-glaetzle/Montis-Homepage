import Card from "./Card.tsx";
import reportScreen from "../assets/Report.png";
import mapScreen from "../assets/Map.png";

export default function CardsSection() {
  return (
    <section className={"mx-auto max-w-6xl px-6 py-16"}>
      <div className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
        <Card>
          <img src={reportScreen} alt={"report"} className={"w-full h-auto"} />
        </Card>
        <Card>
          <img src={mapScreen} alt={"map"} className={"w-full h-auto"} />
        </Card>
      </div>
    </section>
  );
}
