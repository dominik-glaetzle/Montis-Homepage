import Card from "./Card.tsx";

export default function CardsSection() {
  return (
    <section className={"mx-auto max-w-6xl px-6 py-16"}>
      <div className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
        <Card>
          <img
            src={"src/assets/Report.png"}
            alt={"report"}
            className={"w-full h-auto"}
          />
        </Card>
        <Card>
          <img
            src={"src/assets/Map.png"}
            alt={"map"}
            className={"w-full h-auto"}
          />
        </Card>
      </div>
    </section>
  );
}
