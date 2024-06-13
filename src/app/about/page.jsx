import Link from "next/link";
import aboutStyles from "@/app/about/about.module.css";

export default function AboutPage() {
  return (
    <div className={aboutStyles.mainContainer}>
      <header className={aboutStyles.header}>
        <h1>About Page</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <main className="flex">
        <div>
          <img src="park.jpg" alt="amusement park" />
        </div>
        <article>
          <p className="bg-amber-700 text-cyan-700">
            A roller coaster is a type of amusement ride employing a form of
            elevated railroad track that carries passengers on a train through
            tight turns, steep slopes, and other elements designed to produce a
            thrilling experience.
          </p>
        </article>
      </main>
      <footer className={aboutStyles.footer}>
        <p>&copy; Coaster Rollers</p>
      </footer>
    </div>
  );
}
