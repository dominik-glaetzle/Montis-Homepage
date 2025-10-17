import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher.tsx";
import DarkModeButton from "../components/DarkModeButton.tsx";

export default function Support() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#0187CC] dark:text-[#0187CC] hover:underline font-medium transition"
        >
          <ArrowLeft size={18} />
          <p>{t("common.back-to-montis")}</p>
        </button>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <DarkModeButton />
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <section className="grid grid-cols-1 gap-12">
          <article className="space-y-8">
            <header>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0187CC]">
                {t("support.header")}{" "}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <strong>{t("support.published")}</strong>{" "}
                {t("support.published-month")} 2025
              </p>
            </header>

            <div className="space-y-8">
              <Section title={t("support.about-header")}>
                <p>{t("support.about-text")}</p>
              </Section>

              <Section title={t("support.contact-header")}>
                <p>
                  {t("support.contact-text")}
                  <a
                    href="mailto:montis@glaetzle.io"
                    className="text-[#0187CC] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    montis@glaetzle.io
                  </a>
                  .
                </p>
              </Section>

              <Section title={t("support.privacy-header")}>
                <p>
                  {t("support.privacy-text")}{" "}
                  <button
                    onClick={() => navigate("/privacy")}
                    className="text-[#0088cc] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    {t("support.privacy-header")}{" "}
                  </button>
                  .
                </p>
              </Section>
            </div>
          </article>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-700" />

        <footer className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          © 2025 Montis – Dominik Glätzle
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 sm:p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0187CC]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
