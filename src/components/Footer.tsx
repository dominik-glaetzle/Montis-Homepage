import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-black py-8 transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row px-4 text-gray-600">
        <p className="text-sm lg:text-lg  dark:text-white">
          © {new Date().getFullYear()} Montis
        </p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:underline dark:text-white">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
