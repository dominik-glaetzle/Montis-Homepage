import Card from "./Card.tsx";
import { useTranslation } from "react-i18next";

import reportDE from "../assets/screenshots/report-de.png";
import reportEN from "../assets/screenshots/report-en.png";
import reportIT from "../assets/screenshots/report-it.png";

import mapDE from "../assets/screenshots/map-de.png";
import mapEN from "../assets/screenshots/map-en.png";
import mapIT from "../assets/screenshots/map-it.png";

export default function CardsSection() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const reportScreen =
    lang === "de" ? reportDE : lang === "it" ? reportIT : reportEN;

  const mapScreen = lang === "de" ? mapDE : lang === "it" ? mapIT : mapEN;
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
