import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DarkModeButton from "../components/DarkModeButton";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
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
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0187CC] dark:text-[#0187CC]">
                {t("privacy.header")}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <strong>{t("privacy.published")}</strong>{" "}
                {t("privacy.published-month")} 2025
              </p>
            </header>

            <div className="space-y-8">
              <Section title={t("privacy.controller.title")}>
                <p>
                  {t("privacy.controller.body")} <br />
                  <strong>Dominik Glätzle</strong>
                  <br />
                  {t("privacy.controller.email")}{" "}
                  <a
                    href="mailto:dominik@glaetzle.io"
                    className="text-[#0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    dominik@glaetzle.io
                  </a>
                </p>
              </Section>

              <Section title={t("privacy.purpose.title")}>
                <p>{t("privacy.purpose.body")}</p>
              </Section>

              <Section title={t("privacy.collected-data.title")}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>{t("privacy.collected-data.email")}</strong> –{" "}
                    {t("privacy.collected-data.email2")}
                  </li>
                  <li>
                    <strong>{t("privacy.collected-data.push")}</strong> –{" "}
                    {t("privacy.collected-data.push2")}
                  </li>
                  <li>
                    <strong>{t("privacy.collected-data.regions")}</strong> –{" "}
                    {t("privacy.collected-data.regions2")}
                  </li>
                  <li>
                    <strong>{t("privacy.collected-data.telegram")}</strong> –{" "}
                    {t("privacy.collected-data.telegram2")}
                  </li>
                </ul>
                <p>{t("privacy.collected-data.note")}</p>
              </Section>

              <Section title={t("privacy.data-processing.title")}>
                <p>{t("privacy.data-processing.body")}</p>
              </Section>

              <Section title={t("privacy.third-parties.title")}>
                <p>{t("privacy.third-parties.intro")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("privacy.third-parties.item1")}</li>
                  <li>{t("privacy.third-parties.item2")}</li>
                </ul>
                <p>{t("privacy.third-parties.note")}</p>
              </Section>

              <Section title={t("privacy.user-rights.title")}>
                <p>{t("privacy.user-rights.intro")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("privacy.user-rights.item1")}</li>
                  <li>{t("privacy.user-rights.item2")}</li>
                </ul>
                <p>
                  {t("privacy.user-rights.note")}{" "}
                  <a
                    href="mailto:montis@glaetzle.io"
                    className="text-[#0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    montis@glaetzle.io
                  </a>
                  .{t("privacy.user-rights.note2")}
                </p>
              </Section>

              <Section title={t("privacy.data-security.title")}>
                <p>{t("privacy.data-security.body")}</p>
              </Section>

              <Section title={t("privacy.changes.title")}>
                <p>{t("privacy.changes.body")}</p>
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
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0187CC] dark:text-[#0187CC]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
