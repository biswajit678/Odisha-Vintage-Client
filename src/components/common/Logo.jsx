import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Odisha Vintage homepage"
      className="col-start-2 flex flex-col items-center justify-center whitespace-nowrap"
    >
      <span className="font-[var(--font-heading)] text-xl tracking-[0.12em] sm:text-2xl">
        ODISHA
      </span>

      <span className="mt-0.5 text-[9px] font-medium tracking-[0.42em]">
        V I N T A G E
      </span>
    </Link>
  );
}

export default Logo;