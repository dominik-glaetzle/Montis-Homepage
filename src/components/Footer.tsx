import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DarkModeButton from "./DarkModeButton.tsx";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-200 dark:border-black py-8 transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row px-4 text-gray-600">
        <p className="text-sm lg:text-lg  dark:text-white">
          © {new Date().getFullYear()} Montis
        </p>
        {/* ===== FOOTER (Mobile only) ===== */}
        <div className="mt-1 flex justify-center items-center gap-4 md:hidden">
          <DarkModeButton />
        </div>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:underline dark:text-white">
            {t("homepage.privacy")}
          </Link>
          <Link to="/support" className="hover:underline dark:text-white">
            {t("homepage.support")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
