import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="flex items-center gap-2">
      {["de", "en", "it"].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`rounded-full border px-2 py-0.5 text-[10px] sm:text-sm md:px-3 md:py-1 ${
            i18n.language === lng
              ? "bg-slate-200 dark:bg-slate-700"
              : "hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
