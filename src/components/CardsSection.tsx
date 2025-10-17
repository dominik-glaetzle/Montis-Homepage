import Card from "./Card.tsx";
import { useTranslation } from "react-i18next";

export default function CardsSection() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const reportScreen =
    lang === "de"
      ? "src/assets/screenshots/report-de.png"
      : lang === "it"
        ? "src/assets/screenshots/report-it.png"
        : "src/assets/screenshots/report-en.png";

  const mapScreen =
    lang === "de"
      ? "src/assets/screenshots/map-de.png"
      : lang === "it"
        ? "src/assets/screenshots/map-it.png"
        : "src/assets/screenshots/map-en.png";
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
