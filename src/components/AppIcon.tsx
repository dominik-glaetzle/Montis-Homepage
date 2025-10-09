import montisDark from "../assets/montis-dark.png";
import montisLight from "../assets/montis-light.png";

export default function AppIcon() {
  return (
    <div
      className="
        relative h-80 w-80
        overflow-hidden rounded-[3rem] shadow-2xl
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:scale-105
      "
    >
      <img
        src={montisLight}
        alt="Montis Light"
        className="block dark:hidden h-full w-full object-cover rounded-[3rem]"
      />

      <img
        src={montisDark}
        alt="Montis Dark"
        className="hidden dark:block h-full w-full object-cover rounded-[3rem]"
      />
    </div>
  );
}
