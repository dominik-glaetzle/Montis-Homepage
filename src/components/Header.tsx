import AppIcon from "./AppIcon.tsx";

function Header() {
  return (
    <div className={"mx-auto max-w-6xl px-6 py-16 md:py-24"}>
      <div className={"grid grid-cols-1 gap-10 items-center md:grid-cols-2"}>
        <div
          className={"flex justify-center md:justify-end order-1 md:order-2"}
        >
          <AppIcon />
        </div>
        <div className={"text-center md:text-left order-2 md:order-1"}>
          <h1
            className={
              "text-6xl font-extrabold tracking-light text-slate-900 md:text-8xl"
            }
          >
            Montis
          </h1>
          <p
            className={
              "mt-6 max-w-xl text-2xl leading-relaxed text-slate-600 md:text-3xl"
            }
          >
            Stay safe in the mountains. Get daily avalanche reports and alerts
            for all Austrian regions with Montis.
          </p>
          <div className={"mt-8 flex justify-center md:justify-start"}>
            <a
              href="https://apps.apple.com/at/app/montis/id6752115991?l=en-GB"
              aria-label="Get in the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Montis"
                className="h-25 w-auto rounded-3xl md:h-35"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
