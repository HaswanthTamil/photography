import Link from "next/link";

export default function Header() {
  return (
    <header className="photo-nav" aria-label="Site header">
      <Link href="/" className="photo-wordmark" aria-label="Stillroom Studio home">
        Stillroom
      </Link>
      <a className="photo-nav__cta" href="#inquire">
        Book
      </a>
    </header>
  );
}
