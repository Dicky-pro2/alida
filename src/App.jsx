import "./App.css";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MoveRight, X } from "lucide-react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import alidaLogoDark from "./assets/alida-logo-dark.svg";
import alidaLogoFull from "./assets/alida-logo-full.svg";
import brandCreativeIcon from "./assets/brand-creative.svg";
import contentCreationIcon from "./assets/content-creation.svg";
import creativeDirectionIcon from "./assets/creative-direction.svg";
import graphicFlyerIcon from "./assets/graphic-flyer-design.svg";
import socialMediaStrategyIcon from "./assets/social-media-strategy.svg";
import videoEditingIcon from "./assets/video-editing.svg";
import websiteDesignIcon from "./assets/website-design.svg";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image9 from "./assets/image9.jpeg";

const projects = [
  {
    number: "01",
    title: "E-Cruiz’n’Go Global",
    category: "Travel marketing / Graphic design",
    year: "Client work",
    description:
      "Travel flyers, destination marketing and social graphics that help people take off.",
    image: image1,
  },
  {
    number: "02",
    title: "Social-first stories",
    category: "Content creation / Campaigns",
    year: "Selected work",
    description:
      "Promotional graphics, creator campaigns and content ideas made to be understood quickly.",
    image: image4,
  },
  {
    number: "03",
    title: "Web presence",
    category: "Website design / Digital presence",
    year: "Selected work",
    description:
      "Clear, professional websites that give people and businesses a place to show up with confidence.",
    image: image5,
  },
  {
    number: "04",
    title: "Brand & social creative",
    category: "Brand visuals / Content planning",
    year: "Selected work",
    description:
      "A practical mix of visuals, messaging and content direction for brands building in public.",
    image: image2,
  },
];

const services = [
  [
    "01",
    "Content Creation",
    "Content ideas, social media content and short-form stories that help people understand and connect.",
  ],
  [
    "02",
    "Graphic & Flyer Design",
    "Clean, attractive and purposeful designs for businesses, events, campaigns and personal brands.",
  ],
  [
    "03",
    "Video Editing",
    "Short-form, Reels, promotional and business videos edited for social media and brand communication.",
  ],
  [
    "04",
    "Website Design",
    "Website design and business profile setup for a professional online presence.",
  ],
  [
    "05",
    "Brand Creative",
    "Brand visuals, promotional materials and a clear point of view for growing brands.",
  ],
  [
    "06",
    "Social Media & Strategy",
    "Social media management, content planning, brand marketing and creative direction for consistent showing up.",
  ],
  [
    "07",
    "Creative Direction",
    "Turning a loose idea into purposeful creative direction, messaging and content planning.",
  ],
];

const process = [
  [
    "01",
    "Discover",
    "Understand the brand, audience and the real opportunity.",
  ],
  ["02", "Explore", "Build references, ideas and a direction with a pulse."],
  [
    "03",
    "Create",
    "Turn the strongest concept into something people can feel.",
  ],
  ["04", "Refine", "Polish the details until the whole thing clicks."],
];

const prices = [
  ["Website design", "₦15,000"],
  ["Business profile setup", "₦20,000"],
  ["Short-form / Reels editing", "₦10,000"],
  ["Promo / Ad video", "₦15,000"],
  ["Premium business video", "₦20,000"],
  ["Standard flyer", "₦10,000"],
  ["Premium flyer", "₦15,000"],
  ["Social media management", "From ₦40,000 / month"],
];

const themes = [
  "Creativity",
  "Entrepreneurship",
  "Personal branding",
  "Skills & work",
  "Lifestyle & personality",
  "Real life",
];

const serviceImages = [
  contentCreationIcon,
  graphicFlyerIcon,
  videoEditingIcon,
  websiteDesignIcon,
  brandCreativeIcon,
  socialMediaStrategyIcon,
  creativeDirectionIcon,
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [page, setPage] = useState(() => window.location.pathname);
  const navigate = (event, path) => {
    event.preventDefault();
    const destination = new URL(path, window.location.origin);
    window.history.pushState(
      {},
      "",
      `${destination.pathname}${destination.hash}`,
    );
    setPage(destination.pathname);
    setMenuOpen(false);
    if (destination.hash) {
      requestAnimationFrame(() =>
        document
          .querySelector(destination.hash)
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
    });
    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    const handlePopState = () => setPage(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const isHome = !["/pricing", "/brands", "/journey"].includes(page);
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a
          className="wordmark"
          href="/"
          onClick={(event) => navigate(event, "/")}
          aria-label="ALIDA home"
        >
          <img src={alidaLogoFull} alt="ALIDA | Content & Brand Creative" />
        </a>
        <motion.div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={(event) => navigate(event, "#work")}>
            Work
          </a>
          <a href="#about" onClick={(event) => navigate(event, "#about")}>
            About
          </a>
          <a href="#services" onClick={(event) => navigate(event, "#services")}>
            Services
          </a>
          <a href="/pricing" onClick={(event) => navigate(event, "/pricing")}>
            Pricing
          </a>
          <a href="/brands" onClick={(event) => navigate(event, "/brands")}>
            Brands
          </a>
          <a href="/journey" onClick={(event) => navigate(event, "/journey")}>
            Journey
          </a>
          <a href="#contact" onClick={(event) => navigate(event, "#contact")}>
            Contact
          </a>
        </motion.div>
        <a className="handle" href="mailto:akannioluwayemisialida@gmail.com">
          @alida.creates
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isHome && (
        <section className="hero shell" id="top">
          <div className="hero-kicker">
            <span>Content & brand creative</span>
            <span>Meiran, Lagos / Working with intention</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Content & Brand Creative
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                I create.
                <br />
                <em>I design.</em>
              </motion.h1>
              <motion.p
                className="hero-intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                I create. I design. I tell stories. I build brands. Helping
                brands show up, stand out and connect.
              </motion.p>
              <a
                className="text-link"
                href="#work"
                onClick={(event) => navigate(event, "#work")}
              >
                Explore the work <MoveRight size={17} />
              </a>
            </div>
            <motion.div
              className="hero-image-wrap"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{
                delay: 0.45,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={image9} alt="Alida creating content at her desk" />
              <span className="image-note">01 / 04</span>
            </motion.div>
          </div>
          <div className="hero-footer">
            <span>Scroll to discover</span>
            <span className="line"></span>
            <span>Selected work / client + personal</span>
          </div>
        </section>
      )}
      {isHome && (
        <section className="work shell section" id="work">
          <div className="section-heading">
            <p className="eyebrow">A considered selection</p>
            <h2>
              Selected
              <br />
              <em>work.</em>
            </h2>
            <span className="section-number">(01 — 03)</span>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <motion.article
                className={`project project-${index + 1}`}
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} project`} />
                  <span className="project-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <small>
                      {project.category} <b>/</b> {project.year}
                    </small>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
      {isHome && (
        <section className="about section shell" id="about">
          <div className="about-image">
            <img
              src={image9}
              alt="Alida creating content in a warm studio setting"
            />
            <span>Meet Alida</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little context</p>
            <h2>
              Behind
              <br />
              the <em>work.</em>
            </h2>
            <p className="large-copy">
              Hi, I’m Alida, a multi-skilled creative and entrepreneur
              passionate about creativity, content, design, branding and
              building meaningful things.
            </p>
            <p>
              I create, design, edit, build and help ideas come to life. I’m a
              creative, an entrepreneur and a work in progress, intentionally
              building skills that work together.
            </p>
            <a
              className="text-link"
              href="/journey"
              onClick={(event) => navigate(event, "/journey")}
            >
              More about me <MoveRight size={17} />
            </a>
          </div>
        </section>
      )}
      {isHome && (
        <section className="philosophy">
          <div className="shell">
            <p className="eyebrow">The point of it all</p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Creativity is my gift,
              <br />
              impact is my <em>purpose.</em>
              <br />
              <span>
                Beautiful work should communicate, connect and solve a problem.
              </span>
            </motion.h2>
          </div>
        </section>
      )}
      {isHome && (
        <section className="services section shell" id="services">
          <div className="service-intro">
            <p className="eyebrow">What I can do</p>
            <h2>
              Ways I
              <br />
              <em>can help.</em>
            </h2>
            <p>
              Growing brands, businesses and personal projects can find a
              reliable creative plug here.
            </p>
          </div>
          <div className="service-list">
            {services.map(([num, title, desc], index) => (
              <button
                className={`service ${activeService === index ? "active" : ""}`}
                key={title}
                onClick={() => setActiveService(index)}
              >
                <span>{num}</span>
                <strong>{title}</strong>
                <div className="service-detail">
                  <p>{desc}</p>
                  <img src={serviceImages[index]} alt="" />
                  <ArrowUpRight size={20} />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
      {isHome && (
        <section className="process section shell">
          <div className="section-heading">
            <p className="eyebrow">The good stuff, in order</p>
            <h2>
              A simple
              <br />
              <em>process.</em>
            </h2>
          </div>
          <div className="process-list">
            {process.map(([num, title, desc]) => (
              <div className="process-step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {page === "/pricing" && (
        <section className="pricing section shell" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Starting points</p>
            <h2>
              Services &
              <br />
              <em>pricing.</em>
            </h2>
          </div>
          <div className="price-list">
            {prices.map(([name, price]) => (
              <div className="price-row" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
          <p className="pricing-note">
            Prices may vary with posting frequency, content requirements,
            platforms and project scope.
          </p>
        </section>
      )}
      {page === "/brands" && (
        <section className="brands section shell">
          <div>
            <p className="eyebrow">Brands I’ve worked with</p>
            <h2>
              Work that
              <br />
              <em>travels.</em>
            </h2>
          </div>
          <div className="brand-feature">
            <img src={image2} alt="E-Cruiz'n'Go travel promotion" />
            <div>
              <h3>E-Cruiz’n’Go Global Services Ltd</h3>
              <p>
                Travel flyers, captions, hashtags, promotional content,
                destination marketing and travel video concepts, including
                Zanzibar campaigns.
              </p>
            </div>
          </div>
          <div className="brand-feature food-feature">
            <div>
              <h3>Alida’s Food Fusion</h3>
              <p>
                My food and catering business offering catering, baking,
                hospitality, decoration, surprise food trays, cakes and
                cupcakes.
              </p>
            </div>
            <span className="brand-mark">
              Burgundy <b>+</b> Gold
            </span>
          </div>
        </section>
      )}
      {page === "/journey" && (
        <section className="journey section shell" id="journey">
          <div className="journey-copy">
            <p className="eyebrow">Creator journey / September 1</p>
            <h2>
              30 days of
              <br />
              <em>showing up.</em>
            </h2>
            <p className="large-copy">
              I’m documenting the process of becoming, one honest post at a
              time.
            </p>
            <p>
              Starting with what I have. Learning while doing. Creating
              consistently. Building confidence and growing in public.
            </p>
          </div>
          <div className="theme-list">
            <p className="eyebrow">Content themes</p>
            {themes.map((theme, index) => (
              <span key={theme}>
                <b>0{index + 1}</b>
                {theme}
              </span>
            ))}
          </div>
        </section>
      )}
      {isHome && (
        <section className="cta" id="contact">
          <div className="shell">
            <img
              className="cta-logo"
              src={alidaLogoDark}
              alt="ALIDA | Content & Brand Creative"
            />
            <p className="eyebrow">Have an idea?</p>
            <h2>
              Let's bring
              <br />
              <em>it to life.</em>
              <br />
            </h2>
            <a
              className="cta-link"
              href="mailto:akannioluwayemisialida@gmail.com"
            >
              Let's work together <ArrowUpRight size={22} />
            </a>
            <p className="contact-details">
              akannioluwayemisialida@gmail.com
              <br />
              08108068280 / 08053101162
              <br />
              Meiran, Lagos, Nigeria
            </p>
          </div>
        </section>
      )}
      <footer className="footer shell">
        <div>
          <a
            className="wordmark"
            href="/"
            onClick={(event) => navigate(event, "/")}
            aria-label="ALIDA home"
          >
            <img src={alidaLogoFull} alt="ALIDA | Content & Brand Creative" />
          </a>
          <p>
            Content & Brand Creative
            <br />
            Creativity is my gift, impact is my purpose.
          </p>
        </div>
        <div className="footer-links">
          <a href="#work" onClick={(event) => navigate(event, "#work")}>
            Work
          </a>
          <a href="#about" onClick={(event) => navigate(event, "#about")}>
            About
          </a>
          <a href="#services" onClick={(event) => navigate(event, "#services")}>
            Services
          </a>
          <a href="/pricing" onClick={(event) => navigate(event, "/pricing")}>
            Pricing
          </a>
          <a href="#contact" onClick={(event) => navigate(event, "#contact")}>
            Contact
          </a>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/alida.creates">Instagram</a>
          <a href="https://tiktok.com/@alida.creates">TikTok</a>
          <a href="https://wa.me/2348108068280">WhatsApp</a>
          <a href="mailto:akannioluwayemisialida@gmail.com">@alida.creates</a>
        </div>
        <small>© 2026 ALIDA. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
