import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row px-4 text-gray-600">
        <p className="text-sm lg:text-lg">
          © {new Date().getFullYear()} Montis
        </p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>

          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
