import AppIcon from "./AppIcon.tsx";
import DarkModeButton from "./DarkModeButton.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const appstore =
    lang === "de"
      ? "src/assets/appstore/appstore-de.svg"
      : lang === "it"
        ? "src/assets/appstore/appstore-it.svg"
        : "src/assets/appstore/appstore-en.svg";
  return (
    <div className={"mx-auto max-w-6xl px-6 py-16 md:py-24"}>
      <div className={"grid grid-cols-1 gap-10 items-center md:grid-cols-2"}>
        <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-3 mb-5">
          <DarkModeButton />
          <LanguageSwitcher />
        </div>
        <div
          className={"flex justify-center md:justify-end order-1 md:order-2"}
        >
          <AppIcon />
        </div>
        <div className={"text-center md:text-left order-2 md:order-1"}>
          <h1
            className={
              "text-6xl font-extrabold tracking-tight md:text-8xl text-black dark:text-white"
            }
          >
            Montis
          </h1>
          <p
            className={
              "mt-6 max-w-xl text-2xl leading-relaxed text-slate-600 md:text-3xl dark:text-white"
            }
          >
            {t("homepage.description")}
          </p>
          <div className={"mt-8 flex justify-center md:justify-start"}>
            <a
              href={t("homepage.appstore-link")}
              aria-label="Get in the App Store"
            >
              <img
                src={appstore}
                alt="Montis"
                className="h-25 w-auto rounded-2xl md:h-35"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
