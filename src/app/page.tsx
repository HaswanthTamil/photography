"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollVideo from "./components/ScrollVideo";

const portfolioItems = [
  {
    title: "Quiet Rooms",
    category: "Maternity",
    src: "/hero/maternity.png",
    alt: "A softly lit maternity portrait in a neutral studio setting",
    width: 1264,
    height: 843,
    shape: "tall",
  },
  {
    title: "After the Ceremony",
    category: "Family",
    src: "/hero/family.png",
    alt: "A family portrait with warm natural light and relaxed posing",
    width: 1264,
    height: 843,
    shape: "wide",
  },
  {
    title: "Festival Light",
    category: "Event",
    src: "/hero/diwali.jpg",
    alt: "A festive portrait scene lit by warm celebration lights",
    width: 612,
    height: 408,
    shape: "square",
  },
  {
    title: "Object Study",
    category: "Studio",
    src: "/hero/camera.webp",
    alt: "A camera photographed as a studio object study",
    width: 2048,
    height: 1152,
    shape: "wide",
  },
  {
    title: "Above the Table",
    category: "Commercial",
    src: "/hero/birds-eye-view-3.webp",
    alt: "A composed overhead commercial photograph",
    width: 700,
    height: 467,
    shape: "square",
  },
];

const sittings = [
  "Portraits for people who dislike being performed at.",
  "Family sessions that leave room for movement, pauses, and accident.",
  "Product and brand studies with a clean editorial eye.",
  "Events photographed for atmosphere before spectacle.",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="photo-site">
        <section className="photo-hero" aria-label="Photography studio portfolio">
          <div className="photo-hero__stage">
            <div className="photo-hero__video" aria-hidden="true">
              <ScrollVideo src="/hero_video-scrub.mp4" />
            </div>
            <div className="photo-hero__shade" aria-hidden="true" />
            <div className="photo-hero__copy photo-reveal" style={{ "--i": 0 } as CSSProperties}>
              <p className="photo-kicker">Portfolio · sittings · studio work</p>
              <h1>Photographs with a quiet spine.</h1>
              <p>
                A professional photography studio for portraits, families, events, and brand imagery,
                composed with editorial restraint and a soft human pace.
              </p>
              <a className="photo-link photo-link--light" href="#inquire">
                Book a sitting
              </a>
            </div>
            <p className="photo-hero__caption">Light study, scroll reel.</p>
          </div>
        </section>

        <section className="photo-work" id="work" aria-label="Selected photography work">
          <div className="photo-work__intro photo-reveal" style={{ "--i": 1 } as CSSProperties}>
            <h2>Selected work, arranged by feeling rather than date.</h2>
            <p>
              Browse the studio’s current visual language: soft direction, careful negative space,
              and photographs that leave a little air around the person.
            </p>
          </div>

          <div className="photo-filter photo-reveal" style={{ "--i": 2 } as CSSProperties} aria-label="Portfolio categories">
            <span>Portrait</span>
            <span>Family</span>
            <span>Commercial</span>
            <span>Event</span>
          </div>

          <div className="photo-grid">
            {portfolioItems.map((item, index) => (
              <article
                className={`photo-card photo-card--${item.shape} photo-reveal`}
                style={{ "--i": index + 3 } as CSSProperties}
                key={item.title}
              >
                <a href="#inquire" aria-label={`Inquire about ${item.title}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 58vw"
                    priority={index < 2}
                  />
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>View sitting notes</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="photo-sittings" aria-label="Photography session types">
          <div className="photo-sittings__statement photo-reveal" style={{ "--i": 0 } as CSSProperties}>
            We do not hurry people toward a camera. We let the frame catch up.
          </div>
          <div className="photo-sittings__list">
            {sittings.map((sitting, index) => (
              <p className="photo-reveal" style={{ "--i": index + 1 } as CSSProperties} key={sitting}>
                {sitting}
              </p>
            ))}
          </div>
        </section>

        <section className="photo-note" aria-label="Studio approach">
          <div className="photo-note__media photo-reveal" style={{ "--i": 0 } as CSSProperties}>
            <Image
              src="/sv-image-1.jpg"
              alt="Editorial studio reference image with warm interior light"
              width={1152}
              height={544}
              sizes="(max-width: 960px) 100vw, 42vw"
            />
          </div>
          <div className="photo-note__copy photo-reveal" style={{ "--i": 1 } as CSSProperties}>
            <h2>A studio for people, not poses.</h2>
            <p>
              Direction is present, but never loud. Sessions are planned enough to feel calm and
              loose enough to stay alive: wardrobe notes, light tests, time for the room to settle,
              then photographs that feel like they belong to you.
            </p>
            <a className="photo-link" href="#inquire">
              Ask about availability
            </a>
          </div>
        </section>

        <section className="photo-inquiry" id="inquire" aria-label="Photography studio inquiry">
          <div>
            <h2>Tell us what needs to be remembered.</h2>
            <p>
              Share the kind of session, the rough date, and whether the photographs are for home,
              work, or an event. The studio will reply with availability and a calm next step.
            </p>
          </div>
          <a className="photo-button" href="mailto:studio@stillroom.photo?subject=Photography%20inquiry">
            Send inquiry
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
