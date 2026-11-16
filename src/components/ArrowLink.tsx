import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

type ArrowLinkProps = {
  href: string;
  className?: string;
  label?: string;
  download?: boolean;
};

/** The round "go" arrow that appears in the corner of most cards. */
export default function ArrowLink({ href, className = "", label = "Open", download }: ArrowLinkProps) {
  const base =
    "text-3xl text-[gray] transition-all duration-300 opacity-30 hover:text-white hover:opacity-100";

  if (download) {
    return (
      <a href={href} download aria-label={label} className={`${base} ${className}`}>
        <FaRegArrowAltCircleRight />
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={`${base} ${className}`}>
      <FaRegArrowAltCircleRight />
    </Link>
  );
}
